import React from 'react';
import classnames from 'classnames';
import Task from './Task';

import { getNewId } from '../helpers/globalId';

import styles from './TimeFrameGroup.css';

class TimeFrameGroup extends React.Component {
  constructor(props) {
    super(props);
    this.onTaskSubmit = this.onTaskSubmit.bind(this);
  }

  onTaskSubmit(e) {
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
  }

  render() {
    const { newTaskFormHidden } = this.props;
    const formClasses = classnames({
      [styles.hidden]: newTaskFormHidden
    });

    const newTaskStyles = classnames(styles.addNewTask, {
      [styles.hidden]: !newTaskFormHidden
    });
    return (
      <article>
        <h2 className={styles.title}>{`${this.props.group} Tasks`}</h2>
        <ul>
          {this.props.tasks.map(task => {
            return (
              <Task
                checkboxOnClick={this.props.checkboxOnClick}
                key={`${task.title}`}
                task={task}
                decrementOnClick={this.props.decrementOnClick}
                incrementOnClick={this.props.incrementOnClick}
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
