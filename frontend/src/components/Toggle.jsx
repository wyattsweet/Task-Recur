import React from 'react';

import { MyContext } from './Provider';

import styles from './Toggle.css';

const Toggle = ({ recurring, taskId }) => {
  return (
    <MyContext.Consumer>
      {context => {
        const { toggleOnClick } = context;
        return (
          <div className={styles.toggle}>
            <input
              defaultChecked={recurring}
              className={styles.input}
              data-id={taskId}
              onClick={toggleOnClick}
              type="checkbox"
            />
            <span className={styles.togglr} />
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Toggle;
