import React from 'react';

import { MyContext } from './Provider';

import styles from './EditButton.css';

const EditButton = ({ id }) => {
  return (
    <MyContext.Consumer>
      {context => {
        const { setTaskToEdit } = context;
        return (
          <button
            onClick={setTaskToEdit}
            data-id={id}
            type="button"
            className={styles.button}>
            ✎
          </button>
        );
      }}
    </MyContext.Consumer>
  );
};

export default EditButton;
