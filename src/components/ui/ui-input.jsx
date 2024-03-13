// components/PriceFilter.js
import React from "react";
import styles from "../../styles/ui.module.scss";

export const UiInput = ({ name, value, min, max, type, placeholder, onChange }) => {
  return type === "number" ? (
    <input
      name={name}
      type="number"
      min={min}
      max={max}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.uiInput}
    />
  ) : (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
