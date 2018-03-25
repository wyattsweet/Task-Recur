import React from 'react';

import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import Occurrences from './Occurrences';
import Toggle from './Toggle';

const Task = ({
  checkboxOnClick,
  decrementOnClick,
  incrementOnClick,
  onDeleteClick,
  setTaskToEdit,
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
      <EditButton setTaskToEdit={setTaskToEdit} id={id} />
      <DeleteButton id={id} onClick={onDeleteClick} />
    </li>
  );
};

export default Task;
