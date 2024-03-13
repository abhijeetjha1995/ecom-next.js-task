import React, { useEffect, useState } from "react";
import styles from "../styles/header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartDrawer from "./cart-drawer";
import { useCart } from "../store/cart";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [qntCount, setQntCount] = useState(0);

  const { cartItems } = useCart();

  useEffect(() => {
    const cardQnt = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setQntCount(cardQnt);
  }, [cartItems]);

  const handleOpenCart = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  return (
    <div className={styles.Header}>
      <h3 className={styles.productTitle}>E-Commerce</h3>
      <div className={styles.cartButtonWraper}>
        <FontAwesomeIcon
          className={styles.cartButton}
          icon={faCartShopping}
          onClick={handleOpenCart}
        />

        {qntCount > 0 && (
          <span className={styles.cartItemCount}>{qntCount}</span>
        )}
      </div>
      <CartDrawer open={cartOpen} onClose={handleCloseCart} />
    </div>
  );
};

export default Header;
