import React from 'react'

import Delete from '../../assets/DeleteX'
// import DragGrip from '../../assets/DragGrip'
import Edit from '../../assets/Edit'
import Minus from '../../assets/Minus'
import Plus from '../../assets/Plus'
import RecurButton from '../RecurButton'

import styles from './styles.css'

class Task extends React.Component {
  handleDelete = (task) => {
    this.props.onDelete(task)
  }

  render() {
    const { task } = this.props
    return (
      <React.Fragment>
      <h1 className={styles.title}>{task.title}</h1>
      <Minus />
      <input type="checkbox" />
      <Plus />
      <RecurButton />
      <Edit customStyleObject={{ margin: '0 5px 0 0' }} />
      <button onClick={this.handleDelete.bind(this, task)}>
        <Delete />
      </button>
      </React.Fragment>
    )
  }
}

export default Task
