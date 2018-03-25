import React from 'react';

import styles from './DeleteButton.css';

const DeleteButton = ({ id, onClick }) => {
  return (
    <button onClick={onClick} data-id={id} className={styles.button}>
      𝘅
    </button>
  );
};
export default DeleteButton;
