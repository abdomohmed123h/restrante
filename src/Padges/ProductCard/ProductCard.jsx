import styles from "./ProductCard.module.css";

export default function ProductCard({ name, weight, price, image }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 p-3">
      <div className={styles.cardContainer}>
        <img className={styles.productImage} src={image} alt={name} />
        <h2 className={styles.productName}>{name}</h2>
        <span className={`${styles.badge} flex-grow-1 d-inline-block`}>
          {weight}
        </span>
        <p className={styles.price}>${price}</p>
        <button className={styles.addToCartBtn}>Add To Cart</button>
      </div>
    </div>
  );
}
