import React from "react";
import Image from "next/image";
import styles from "../styles/product-item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { UiStarRating } from "./ui";
import { useCart } from "../store/cart";


const ProductItem = ({ product }) => {
  const { addItem } = useCart();
  return (
    <div className={styles.productItem}>
      <div className={styles.product}>
        <div className={styles.productImageWraper}>
          <Image
            width={100}
            height={100}
            alt={product.name}
            src={product.image}
            className={styles.productImage}
            objectFit="fit"
          />
        </div>
        <h3 className={styles.productName}>{product.title}</h3>
        <div className={styles.productPriceButton}>
          <div>
            <p className={styles.productPrice}>${product.price}</p>
            <UiStarRating rating={product?.rating?.rate} />
          </div>
          <FontAwesomeIcon
            className={styles.productButton}
            icon={faCartPlus}
            onClick={() => addItem(product)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
