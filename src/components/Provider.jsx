/* eslint-disable */

import React from 'react';

import {
  decrementOccurrences,
  decrementRemainingOccurrences,
  deleteTask,
  getAllTasks,
  incrementOccurrences,
  incrementRemainingOccurrences,
  postTask,
  updateTask
} from '../helpers/tasksData';

export const MyContext = React.createContext();

class Provider extends React.Component {
  static checkboxOnClick(e) {
    const { checked } = e.target;
    const { id } = e.target.dataset;
    return checked
      ? decrementRemainingOccurrences(id)
      : incrementRemainingOccurrences(id);
  }

  inputField = {};

  state = {
    editTaskWithId: null,
    tasks: [],
    groupWithActiveButton: null
  };

  componentDidMount() {
    this.getUpdatedTasks();
  }

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

  onDeleteClick = e => {
    deleteTask(e.target.dataset.id);
    this.getUpdatedTasks();
  };

  setTaskToEdit = e => {
    this.setState({ editTaskWithId: e.target.dataset.id });
  };

  getUpdatedTasks = () => {
    const allTasks = getAllTasks();
    this.setState({ tasks: allTasks });
  };

  cancelOnClick = () => {
    this.setState({ editTaskWithId: null });
  };

  editTaskSubmit = (title, id) => {
    updateTask({
      id,
      title
    });
    this.setState({ editTaskWithId: null });
    this.getUpdatedTasks();
  };

  toggleOnClick = e => {
    const recurring = e.target.checked;
    const { id } = e.target.dataset;
    updateTask({ id, recurring });
  };

  addTask = task => {
    const { tasks: allTasks } = this.state;
    this.setState({
      groupWithActiveButton: null,
      tasks: [...allTasks, task]
    });
    postTask(this.state.tasks, task);
  };

  onAddButtonClick = group => () => {
    this.setState({ groupWithActiveButton: group }, () => {
      this.inputField[group].focus();
    });
  };

  render() {
    const { editTaskWithId, groupWithActiveButton } = this.state;
    return (
      <MyContext.Provider
        value={{
          cancelOnClick: this.cancelOnClick,
          checkboxOnClick: MyContext.checkboxOnClick,
          onDeleteClick: this.onDeleteClick,
          editTaskSubmit: this.editTaskSubmit,
          setTaskToEdit: this.setTaskToEdit,
          incrementOnClick: this.incrementOnClick,
          decrementOnClick: this.decrementOnClick,
          tasks: this.state.tasks,
          toggleOnClick: this.toggleOnClick,
          addTask: this.addTask,
          groupWithActiveButton,
          onAddButtonClick: this.onAddButtonClick,
          editTaskWithId,
          setInputField: (group, el) => (this.inputField[group] = el)
        }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default Provider;
