import React, { useEffect, useState } from "react";
import styles from "../styles/cart-drawer.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
  faTrash,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../store/cart";

const CartDrawer = ({ open, onClose }) => {
  const [amount, setAmount] = useState(0);
  const { cartItems, addItem, removeItem, clearItem } = useCart();

  const handleCloseCart = () => onClose();

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setAmount(Math.floor(total * 100) / 100);
  }, [cartItems]);

  return (
    <div className={`${styles.cartDrawer} ${open ? styles.open : ""}`}>
      <FontAwesomeIcon
        className={styles.closeCart}
        icon={faClose}
        onClick={handleCloseCart}
      />

      <div className={styles.cartItems}>
        {cartItems?.length === 0 && <p>Please add item to cart</p>}
        {cartItems?.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <Image
              width={100}
              height={100}
              alt={item.title}
              src={item.image}
              className={styles.productImage}
              objectFit="fit"
            />
            <div className={styles.productDetails}>
              <span>{item.title}</span>
              <br />
              <span>${item.price}</span>
              <div className={styles.quantity}>
                <FontAwesomeIcon
                  className={styles.cartButton}
                  icon={faMinusSquare}
                  onClick={() => removeItem(item.id)}
                />
                <span className={styles.qty}>{item.quantity}</span>
                <FontAwesomeIcon
                  className={styles.cartButton}
                  icon={faPlusSquare}
                  onClick={() => addItem(item)}
                />
              </div>
            </div>

            <FontAwesomeIcon
              className={styles.cartButton}
              icon={faTrash}
              onClick={() => clearItem(item.id)}
            />
          </div>
        ))}
        {cartItems?.length > 0 && <h4>Total ${amount}</h4>}
      </div>
    </div>
  );
};

export default CartDrawer;
