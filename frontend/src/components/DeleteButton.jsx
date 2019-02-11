import React from 'react';

import { MyContext } from './Provider';

import styles from './DeleteButton.css';

const DeleteButton = ({ id }) => {
  return (
    <MyContext.Consumer>
      {context => {
        const { onDeleteClick } = context;
        return (
          <button
            onClick={onDeleteClick}
            data-id={id}
            className={styles.button}
            type="button">
            𝘅
          </button>
        );
      }}
    </MyContext.Consumer>
  );
};
export default DeleteButton;
