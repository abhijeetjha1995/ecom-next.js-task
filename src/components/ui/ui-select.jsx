import React from "react";
import styles from "../../styles/ui.module.scss";

export const UiSelect = ({ label, options = [], value, onChange, ...props }) => {
  return (
    <div className={styles.filter}>
      <h4>{label}</h4>
      <select
        className={styles.filterDropdown}
        value={value}
        onChange={onChange}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
