import React from 'react';
import classnames from 'classnames';
import Task from './Task';

import { getNewId } from '../helpers/globalId';
import { updateTask } from '../helpers/tasksData';
import {
  isNewDay,
  isNewWeek,
  isNewMonth,
  postNewWeek,
  postNewDay,
  postNewMonth
} from '../helpers/time';

import styles from './TimeFrameGroup.css';

class TimeFrameGroup extends React.Component {
  onTaskSubmit = e => {
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
    this.props.addTask(newTask);
    e.target.task.value = null;
  };

  checkRecurrence = (task, chkFn) => {
    const reset = chkFn();
    const alteredTask = task;
    if (reset && alteredTask.recurring) {
      alteredTask.occurrencesRemaining = alteredTask.occurrences;
      alteredTask.complete = false;
      updateTask(alteredTask);
    }
    return alteredTask;
  };

  render() {
    const { group, newTaskFormHidden, tasks } = this.props;
    const formClasses = classnames({
      [styles.hidden]: newTaskFormHidden
    });

    const newTaskStyles = classnames(styles.addNewTask, {
      [styles.hidden]: !newTaskFormHidden
    });
    return (
      <article>
        <h2 className={styles.title}>{`${group} Tasks`}</h2>
        <ul>
          {tasks.map((task, index) => {
            let chkFn;
            let resetTime;
            if (group === 'daily') {
              chkFn = isNewDay;
              resetTime = postNewDay;
            } else if (group === 'weekly') {
              chkFn = isNewWeek;
              resetTime = postNewWeek;
            } else {
              chkFn = isNewMonth;
              resetTime = postNewMonth;
            }
            const taskReset = this.checkRecurrence(task, chkFn);
            if (index == tasks.length - 1 && chkFn()) {
              resetTime();
            }
            return (
              <Task
                checkboxOnClick={this.props.checkboxOnClick}
                key={`${taskReset.title}`}
                task={taskReset}
                decrementOnClick={this.props.decrementOnClick}
                incrementOnClick={this.props.incrementOnClick}
                toggleOnClick={this.props.toggleOnClick}
              />
            );
          })}
          <li>
            <section className={formClasses}>
              <form onSubmit={this.onTaskSubmit}>
                <input
                  className={`${this.props.group}-input`}
                  data-group={this.props.group}
                  name="task"
                  placeholder="task"
                  ref={this.props.inputRef}
                  type="text"
                />
              </form>
            </section>
            <button
              data-group={this.props.group}
              onClick={this.props.onAddButtonClick}
              className={newTaskStyles}>
              <div className={styles.addButton}>
                <span className={styles.x}>+</span>
              </div>
              <span className={styles.addTaskLabel}>Add Task</span>
            </button>
          </li>
        </ul>
      </article>
    );
  }
}

export default TimeFrameGroup;
