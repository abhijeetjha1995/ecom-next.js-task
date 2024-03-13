import styles from "../../styles/ui.module.scss";

export const UiButton = ({ children, onClick, ...props }) => {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
