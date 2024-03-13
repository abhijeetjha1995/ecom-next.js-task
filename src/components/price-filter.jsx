import React from "react";
import styles from "../styles/ui.module.scss";
import { UiInput } from "./ui";

const PriceFilter = ({ min, max, values = {}, onChange }) => {
  const handleFilter = (event) => {
    const { name, value } = event.target;
    const object = {};
    object.target = { name, value };
    onChange(object);
  };

  return (
    <div className={styles.filter}>
      <h4>Price Range</h4>
      <div className={styles.priceRange}>
        <UiInput
          type="number"
          name="minPrice"
          min={min}
          value={values.minPrice}
          placeholder="Min"
          onChange={handleFilter}
          maxlength="4"
        />
        -
        <UiInput
          type="number"
          name="maxPrice"
          min={min}
          max={max}
          value={values.maxPrice}
          placeholder="Max"
          onChange={handleFilter}
          maxlength="4"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
