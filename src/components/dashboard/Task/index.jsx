import React from 'react'

import Delete from '../../assets/Close'
import DragGrip from '../../assets/DragGrip'
import Edit from '../../assets/Edit'
import Minus from '../../assets/Minus'
import Plus from '../../assets/Plus'

import styles from './styles.css'

const Task = ({ title }) => {
  return (
    <div className={styles.task}>
      <DragGrip />
      <h1>{title}</h1>
      <Minus />
      <input type="checkbox" />
      <Plus />
      <Edit />
      <Delete />
    </div>
  )
}

export default Task
