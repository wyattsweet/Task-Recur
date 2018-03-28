import React from 'react';

import { MyContext } from './Provider';

import styles from './Occurrences.css';

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
        defaultChecked={checked}
        onClick={onClick}
        key={totalOccurrences}
        type="checkbox"
      />
    );
    allBoxes.unshift(input);
    totalOccurrences -= 1;
  }
  return allBoxes;
};

const Occurrences = ({ id, occurrences, occurrencesRemaining, timeFrame }) => {
  return (
    <MyContext.Consumer>
      {context => {
        const { checkboxOnClick, decrementOnClick, incrementOnClick } = context;
        return (
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
              checkboxOnClick,
              timeFrame
            )}
            <button
              className={styles.button}
              data-id={id}
              onClick={incrementOnClick}>
              +
            </button>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Occurrences;
