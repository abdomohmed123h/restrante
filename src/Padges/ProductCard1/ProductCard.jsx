import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard2({ name, path, image }) {
  return (
    <Link to={path} className="col-12 col-md-5 col-lg-4 p-3">
      <div className={styles.cardContainer}>
        <img className={styles.productImage} src={image} alt={name} />
        <h2 className={styles.productName}>{name}</h2>
      </div>
    </Link>
  );
}
