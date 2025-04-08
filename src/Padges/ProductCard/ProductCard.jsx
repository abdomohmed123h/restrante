import { usecart } from "../Sidcart/cartStore";  // Import Zustand store
import styles from "./ProductCard.module.css";  // Import styles for the component

export default function ProductCard({ name, weight, price, image, prodect }) {
  const {  setCattindex, addToCart } = usecart()
  ;  // Extract necessary functions from Zustand store

  const handleAddToCart = () => {
    setCattindex(true);  // Show the cart when an item is added
    addToCart({
      ...prodect,
      quantity: 1,  // Adding a default quantity of 1
    });  // Add product to the cart
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 p-3">
      <div className={styles.cardContainer}>
        <img className={styles.productImage} src={image} alt={name} />
        <h2 className={styles.productName}>{name}</h2>
        <span className={`${styles.badge} flex-grow-1 d-inline-block`}>{weight}</span>
        <p className={styles.price}>${price}</p>
        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
