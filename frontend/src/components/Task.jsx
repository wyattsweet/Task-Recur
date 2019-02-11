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
    complete,
    task: true
  });

  return (
    <div className={taskClass}>
      <span>{title}</span>
      <Occurrences
        id={id}
        occurrences={occurrences}
        occurrencesRemaining={occurrencesRemaining}
        timeFrame={timeFrame}
      />
      <div className={styles.taskControls}>
        <Toggle taskId={id} recurring={recurring} />
        <EditButton id={id} />
        <DeleteButton id={id} />
      </div>
    </div>
  );
};

export default Task;
