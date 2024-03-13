import React from 'react';
import styles from "../../styles/ui.module.scss";


export const UiStarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className={styles.filledStar}>&#9733;</span>);
    } else {
      stars.push(<span key={i} className={styles.emptyStar}>&#9734;</span>);
    }
  }

  return (
    <div className={styles.productStarRating}>
      {stars}
      <span className={styles.rating}>{rating}</span>
    </div>
  );
};