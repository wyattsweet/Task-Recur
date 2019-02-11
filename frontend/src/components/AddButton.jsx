import classnames from 'classnames';
import React from 'react';

import { getNewId } from '../helpers/globalId';
import { MyContext } from './Provider';

import styles from './AddButton.css';

const AddButton = ({ inputRef, group }) => {
  return (
    <MyContext.Consumer>
      {context => {
        const { addTask, groupWithActiveButton, onAddButtonClick } = context;
        const newTaskFormHidden = groupWithActiveButton !== group;
        const formClasses = classnames({
          [styles.hidden]: newTaskFormHidden
        });

        const newTaskStyles = classnames(styles.addNewTask, {
          [styles.hidden]: !newTaskFormHidden
        });
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
            <button
              type="button"
              onClick={onAddButtonClick(group)}
              className={newTaskStyles}>
              <div className={styles.addButton}>
                <span className={styles.x}>+</span>
              </div>
              <span className={styles.addTaskLabel}>Add Task</span>
            </button>
          </li>
        );
      }}
    </MyContext.Consumer>
  );
};

export default AddButton;
