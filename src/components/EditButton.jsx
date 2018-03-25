import React from 'react';

import styles from './EditButton.css';

const EditButton = ({ id, setTaskToEdit }) => {
  return (
    <button onClick={setTaskToEdit} data-id={id} className={styles.button}>
      ✎
    </button>
  );
};

export default EditButton;
