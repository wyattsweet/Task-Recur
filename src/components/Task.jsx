import React from 'react';

import Toggle from './Toggle';

import styles from './Task.css';

const createCheckboxes = (
  id,
  occurrences,
  remainingOccurrences,
  onClick,
  timeFrame
) => {
  const allBoxes = [];

  let unchecked = remainingOccurrences;
  let totalOccurrences = occurrences;
  while (totalOccurrences) {
    const checked = !(unchecked > 0);
    unchecked -= 1;
    const input = (
      <input
        data-timeframe={timeFrame}
        data-id={id}
        onClick={onClick}
        defaultChecked={checked}
        key={totalOccurrences}
        type="checkbox"
      />
    );
    allBoxes.unshift(input);
    totalOccurrences -= 1;
  }
  return allBoxes;
};

const Task = props => {
  const {
    id,
    occurrences,
    occurrencesRemaining,
    recurring,
    title,
    timeFrame
  } = props.task;
  const { decrementOnClick, incrementOnClick, toggleOnClick } = props;
  return (
    <li>
      <label htmlFor="occurrenceBlock">
        {title}
        <div className={styles.occurrences}>
          <button
            className={styles.button}
            data-id={id}
            onClick={decrementOnClick}>
            -
          </button>
          {createCheckboxes(
            id,
            occurrences,
            occurrencesRemaining,
            props.checkboxOnClick,
            timeFrame
          )}
          <button
            className={styles.button}
            data-id={id}
            onClick={incrementOnClick}>
            +
          </button>
        </div>
      </label>
      <Toggle taskId={id} onClick={toggleOnClick} recurring={recurring} />
    </li>
  );
};

export default Task;
