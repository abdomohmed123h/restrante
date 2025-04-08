import React from "react";
import styles from "./Sidcar.module.css";  // Importing styles
import "animate.css";  // Importing animation
import { usecart } from "./cartStore";  // Import Zustand store
import { IoClose } from "react-icons/io5";  // Close icon for the cart
import Prodectcar from "./prodectcart/prodectcar";  // Import Productcar component
import Swal from "sweetalert2";

export default function Sidcar() {
  const { cartItems, setCattindex, clearCart } = usecart();  // Extract necessary functions from Zustand store

  // Calculate total cost of items in the cart
  const total = cartItems.reduce((acc, product) => acc + parseFloat(product.price) * product.quantity, 0);
  const handleCheckout = () => {
    Swal.fire({
      title: "Checkout",
      html: `
        <div>
          <label>Name:</label><br>
          <input id="name" class="swal2-input" placeholder="Enter your name" /><br><br>
          <label>Address:</label><br>
          <input id="address" class="swal2-input" placeholder="Enter your address" /><br><br>
          <label>Payment Method:</label><br>
          <select id="paymentMethod" class="swal2-input">
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select><br><br>
        </div>
      `,
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const paymentMethod = document.getElementById("paymentMethod").value;

        if (!name || !address || !paymentMethod) {
          Swal.showValidationMessage("Please fill in all fields!");
          return false;
        }

        // Proceed with placing the order
        return { name, address, paymentMethod };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { name, address, paymentMethod } = result.value;

        // You can integrate your order placement logic here
        console.log("Order placed:", { name, address, paymentMethod, cartItems, total });
        clearCart(); // Clear the cart after placing the order
        Swal.fire("Success!", "Your order has been placed!", "success"); // Success message
      }
    });
  };

  return (
    <>
      <div
        className={styles.sidcar}
        onClick={() => {
          setCattindex(false);  // Close the cart when clicking outside
        }}
      >
        <div
          className={`${styles.sidcar__content} rounded-3 shadow-lg animate__animated animate__fadeInRight`}
          onClick={(e) => e.stopPropagation()}  // Prevent click propagation to close the cart
        >
          <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
            <h1 className="fs-4 fw-bold text-secondary mb-0">Cart</h1>
            <button
              className="btn btn-danger rounded-2"
              onClick={() => {
                setCattindex(false);  // Close the cart
              }}
            >
              <IoClose />
            </button>
          </div>

          <div className="p-3 d-flex flex-column gap-3">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>  // Display message if cart is empty
            ) : (
              cartItems.map((product) => (
                <Prodectcar
                  key={product.id}
                  img={
                    product.imgUrl?.[0]?.url
                      ? "http://localhost:1337" + product.imgUrl[0].url
                      : "/placeholder-image.jpg"
                  } // Use the first image URL
                  title={product.prodect_name}
                  price={parseFloat(product.price)}  // Convert string price to float
                  id={product.id}
                  quantity={product.quantity}  

                />
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <>
            <div className="p-3 border-top d-flex justify-content-between align-items-center">
              <h5 className="m-0">Total: ${total.toFixed(2)}</h5>
              <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>  
            </div>
            <div className="p-3 border-top d-flex justify-content-between align-items-center">
              <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
              </div>
            </>
            
            
            
          )}
           
        </div>
      </div>
    </>
  );
}
