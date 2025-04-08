import { create } from "zustand";

export const usecart = create((set) => ({
  cattindex: false,
  setCattindex: (value) => set({ cattindex: value }),

  cartItems: [],

  addToCart: (product) =>
    set((state) => {
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex >= 0) {
        const updatedCart = [...state.cartItems];
        updatedCart[existingProductIndex].quantity += product.quantity;
        return { cartItems: updatedCart };
      } else {
        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] }; // Set default quantity to 1
      }
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((product) => product.id !== id)
    })),

  updateQuantity: (id, newQuantity) =>
    set((state) => {
      const updatedCart = state.cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return { cartItems: updatedCart };
    }),

  clearCart: () => set({ cartItems: [] }),

  resetQuantitiesToDefault: () =>
    set((state) => ({
      cartItems: state.cartItems.map((item) => ({ ...item, quantity: 1 })) // Reset quantity to 1 for all items
    }))
}));
