import React from 'react';

import styles from './Toggle.css';

const Toggle = ({ onClick, recurring, taskId }) => {
  return (
    <div className={styles.toggle}>
      <input
        defaultChecked={recurring}
        className={styles.input}
        data-id={taskId}
        onClick={onClick}
        type="checkbox"
      />
      <span className={styles.togglr} />
    </div>
  );
};

export default Toggle;
