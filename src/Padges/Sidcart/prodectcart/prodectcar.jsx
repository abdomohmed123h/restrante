
import styles from "./prodectcar.module.css";
import { usecart } from "../cartStore";

export default function Prodectcar({ img, title, price, id, quantity }) {
  const { removeFromCart, updateQuantity } = usecart();
  

  const handleDecrease = () => {


    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    } else {
      removeFromCart(id);
    }
  };

  const handleIncrease = () => {
    updateQuantity(id, quantity + 1);
  };

  const total = price * quantity;

  return (
    <div className={`${styles.prodectcar} bg-light p-3 rounded-4 shadow-lg`}>
      <img src={img} alt={title} className={`${styles.img} rounded-3 border`} />

      <div className="d-flex flex-column justify-content-between ms-3 flex-grow-1">
        <h5>{title}</h5>
        <p className="m-0">Price: ${price.toFixed(2)}</p>

        <div className="d-flex align-items-center gap-2 my-2">
          <button className="btn btn-danger" onClick={handleDecrease}>-</button>
          <span className="fw-bold">{quantity}</span>
          <button className="btn btn-success" onClick={handleIncrease}>+</button>
        </div>

        <p className="m-0">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}
