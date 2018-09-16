import React from 'react'

import Delete from '../../assets/DeleteX'
// import DragGrip from '../../assets/DragGrip'
import Edit from '../../assets/Edit'
import EditTask from './EditTask'
import Minus from '../../assets/Minus'
import Plus from '../../assets/Plus'
import RecurButton from '../RecurButton'
import TaskTitle from './TaskTitle'

import styles from './styles.css'

class Task extends React.Component {
  state = {
    editTaskViewable: false,
    title: this.props.task.title,
  }

  handleDelete = task => {
    this.props.onDelete(task)
  }

  handleTitleChange = event => {
    this.setState({ title: event.target.value })
  }

  toggleEditView = () => {
    const { editTaskViewable } = this.state
    this.setState({ editTaskViewable: !editTaskViewable })
  }

  handleEdit = (
    title = this.props.task.title,
    recurring = this.props.task.recurring,
    e,
  ) => {
    e.preventDefault()
    const newTask = {
      ...this.props.task,
      title,
      recurring
    }
    this.props.onUpdate(newTask)
    this.toggleEditView()
  }

  handleRecurChange = () => {
    console.log('changing')
  }

  render() {
    const { task } = this.props
    const { editTaskViewable, title } = this.state
    return (
      <React.Fragment>
        {editTaskViewable ? (
          <EditTask
            handleEdit={this.handleEdit}
            handleTitleChange={this.handleTitleChange}
            title={title}
          />
        ) : (
          <TaskTitle title={title} />
        )}
        <Minus />
        <input type="checkbox" />
        <Plus />
        <RecurButton
          handleRecurChange={this.handleRecurChange}
          title={task.title}
          recurring={task.recurring}
        />
        <button onClick={this.toggleEditView}>
          <Edit customStyleObject={{ margin: '0 5px 0 0' }} />
        </button>
        <button onClick={this.handleDelete.bind(this, task)}>
          <Delete />
        </button>
      </React.Fragment>
    )
  }
}

export default Task
