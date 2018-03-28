import React from 'react';

import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import Occurrences from './Occurrences';
import Toggle from './Toggle';

const Task = ({ task }) => {
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
        id={id}
        occurrences={occurrences}
        occurrencesRemaining={occurrencesRemaining}
        timeFrame={timeFrame}
      />
      <Toggle taskId={id} recurring={recurring} />
      <EditButton id={id} />
      <DeleteButton id={id} />
    </li>
  );
};

export default Task;
