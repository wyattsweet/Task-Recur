import classNames from 'classnames/bind';
import React from 'react';

import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import Occurrences from './Occurrences';
import Toggle from './Toggle';

import styles from './Task.css';

const cx = classNames.bind(styles);

const Task = ({ task }) => {
  const {
    complete,
    id,
    occurrences,
    occurrencesRemaining,
    recurring,
    title,
    timeFrame
  } = task;

  const taskClass = cx({
    complete
  });

  return (
    <li className={taskClass}>
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
