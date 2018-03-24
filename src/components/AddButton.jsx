import classnames from 'classnames';
import React from 'react';

import { getNewId } from '../helpers/globalId';

import styles from './AddButton.css';

const AddButton = ({
  addTask,
  group,
  inputRef,
  newTaskFormHidden,
  onAddButtonClick
}) => {
  const onTaskSubmit = e => {
    e.preventDefault();
    const { value } = e.target.task;
    const newTask = {
      id: getNewId(),
      occurrences: 1,
      occurrencesRemaining: 1,
      recurring: false,
      title: value,
      timeFrame: e.target.task.dataset.group
    };
    addTask(newTask);
    e.target.task.value = null;
  };
  const formClasses = classnames({
    [styles.hidden]: newTaskFormHidden
  });

  const newTaskStyles = classnames(styles.addNewTask, {
    [styles.hidden]: !newTaskFormHidden
  });
  return (
    <li>
      <section className={formClasses}>
        <form onSubmit={onTaskSubmit}>
          <input
            className={`${group}-input`}
            data-group={group}
            name="task"
            placeholder="task"
            ref={inputRef}
            type="text"
          />
        </form>
      </section>
      <button onClick={onAddButtonClick(group)} className={newTaskStyles}>
        <div className={styles.addButton}>
          <span className={styles.x}>+</span>
        </div>
        <span className={styles.addTaskLabel}>Add Task</span>
      </button>
    </li>
  );
};

export default AddButton;
