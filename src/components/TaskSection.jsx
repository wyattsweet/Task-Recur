import React from 'react';

import {
  getAllTasks,
  postTask,
  incrementOccurrences,
  decrementOccurrences,
  incrementRemainingOccurrences,
  decrementRemainingOccurrences
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

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      groupWithActiveButton: null
    };
    this.inputField = {};
    this.addTask = this.addTask.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.getUpdatedTasks = this.getUpdatedTasks.bind(this);
    this.incrementOnClick = this.incrementOnClick.bind(this);
    this.decrementOnClick = this.decrementOnClick.bind(this);
  }

  componentDidMount() {
    this.getUpdatedTasks();
  }

  onAddButtonClick(e) {
    const {
      group = e.target.parentNode.parentNode.dataset.group
    } = e.target.parentNode.dataset;
    this.setState({ groupWithActiveButton: group }, () => {
      this.inputField[group].focus();
    });
  }

  getUpdatedTasks() {
    const allTasks = getAllTasks();
    this.setState({ tasks: allTasks });
  }

  selectTasksByTimeFrame(timeFrame) {
    return this.state.tasks.filter(task => {
      return timeFrame === task.timeFrame;
    });
  }

  addTask(task) {
    const { tasks: allTasks } = this.state;
    this.setState({
      groupWithActiveButton: null,
      tasks: [...allTasks, task]
    });
    postTask(this.state.tasks, task);
  }

  incrementOnClick(e) {
    const { id } = e.target.dataset;
    incrementOccurrences(id);
    this.getUpdatedTasks();
  }

  decrementOnClick(e) {
    const { id } = e.target.dataset;
    decrementOccurrences(id);
    this.getUpdatedTasks();
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      const { group } = child.props;
      return React.cloneElement(child, {
        tasks: this.selectTasksByTimeFrame(group),
        addTask: this.addTask,
        onAddButtonClick: this.onAddButtonClick,
        newTaskFormHidden: this.state.groupWithActiveButton !== group,
        inputRef: el => (this.inputField[group] = el),
        checkboxOnClick: TaskSection.checkboxOnClick,
        decrementOnClick: this.decrementOnClick,
        incrementOnClick: this.incrementOnClick
      });
    });
    return <main className={styles.main}>{children}</main>;
  }
}

export default TaskSection;
