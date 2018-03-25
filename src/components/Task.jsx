import React from 'react';

import DeleteButton from './DeleteButton';
import Occurrences from './Occurrences';
import Toggle from './Toggle';

const Task = ({
  checkboxOnClick,
  decrementOnClick,
  onDeleteClick,
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
      <Toggle taskId={id} onClick={toggleOnClick} recurring={recurring} />
      <DeleteButton id={id} onClick={onDeleteClick} />
    </li>
  );
};

export default Task;
