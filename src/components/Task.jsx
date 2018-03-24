import React from 'react';

import Occurrences from './Occurrences';
import Toggle from './Toggle';

const Task = ({
  checkboxOnClick,
  decrementOnClick,
  incrementOnClick,
  task,
  toggleOnClick
}) => {
  const {
    id,
    occurrences,
    occurrencesRemaining,
    recurring,
    title,
    timeFrame
  } = task;
  return (
    <li>
      <label htmlFor="occurrenceBlock">
        {title}
        <Occurrences
          checkboxOnClick={checkboxOnClick}
          decrementOnClick={decrementOnClick}
          id={id}
          incrementOnClick={incrementOnClick}
          occurrences={occurrences}
          occurrencesRemaining={occurrencesRemaining}
          timeFrame={timeFrame}
        />
      </label>
      <Toggle taskId={id} onClick={toggleOnClick} recurring={recurring} />
    </li>
  );
};

export default Task;
