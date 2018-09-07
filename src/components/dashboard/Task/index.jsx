import React from 'react'

import Delete from '../../assets/DeleteX'
// import DragGrip from '../../assets/DragGrip'
import Edit from '../../assets/Edit'
import Minus from '../../assets/Minus'
import Plus from '../../assets/Plus'
import RecurButton from '../RecurButton'

import styles from './styles.css'

const Task = ({ id, onDelete, title }) => {
  return (
    <React.Fragment>
      <h1 className={styles.title}>{title}</h1>
      <Minus />
      <input type="checkbox" />
      <Plus />
      <RecurButton />
      <Edit customStyleObject={{ margin: '0 5px 0 0' }} />
      <Delete id={id} onDelete={onDelete} />
    </React.Fragment>
  )
}

export default Task
