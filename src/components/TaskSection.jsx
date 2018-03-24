import React from 'react';

import {
  decrementOccurrences,
  decrementRemainingOccurrences,
  getAllTasks,
  incrementOccurrences,
  incrementRemainingOccurrences,
  postTask,
  updateTask
} from '../helpers/tasksData';

import styles from './TaskSection.css';

class TaskSection extends React.Component {
  static checkboxOnClick(e) {
    const { checked } = e.target;
    const { id } = e.target.dataset;
    return checked
      ? decrementRemainingOccurrences(id)
      : incrementRemainingOccurrences(id);
  }

  state = {
    tasks: [],
    groupWithActiveButton: null
  };

  inputField = {};

  componentDidMount() {
    this.getUpdatedTasks();
  }

  onAddButtonClick = group => () => {
    this.setState({ groupWithActiveButton: group }, () => {
      this.inputField[group].focus();
    });
  };

  getUpdatedTasks = () => {
    const allTasks = getAllTasks();
    this.setState({ tasks: allTasks });
  };

  toggleOnClick = e => {
    const recurring = e.target.checked;
    const { id } = e.target.dataset;
    updateTask({ id, recurring });
  };

  selectTasksByTimeFrame = timeFrame => {
    return this.state.tasks.filter(task => {
      return timeFrame === task.timeFrame;
    });
  };

  addTask = task => {
    const { tasks: allTasks } = this.state;
    this.setState({
      groupWithActiveButton: null,
      tasks: [...allTasks, task]
    });
    postTask(this.state.tasks, task);
  };

  incrementOnClick = e => {
    const { id } = e.target.dataset;
    incrementOccurrences(id);
    this.getUpdatedTasks();
  };

  decrementOnClick = e => {
    const { id } = e.target.dataset;
    decrementOccurrences(id);
    this.getUpdatedTasks();
  };

  render() {
    const children = React.Children.map(this.props.children, child => {
      const { group } = child.props;
      return React.cloneElement(child, {
        addTask: this.addTask,
        checkboxOnClick: TaskSection.checkboxOnClick,
        decrementOnClick: this.decrementOnClick,
        incrementOnClick: this.incrementOnClick,
        inputRef: el => (this.inputField[group] = el),
        newTaskFormHidden: this.state.groupWithActiveButton !== group,
        onAddButtonClick: this.onAddButtonClick,
        tasks: this.selectTasksByTimeFrame(group),
        toggleOnClick: this.toggleOnClick
      });
    });
    return <main className={styles.main}>{children}</main>;
  }
}

export default TaskSection;
