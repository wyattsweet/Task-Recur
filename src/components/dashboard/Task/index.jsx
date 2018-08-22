import React from 'react'

import Delete from '../../assets/Close'
// import DragGrip from '../../assets/DragGrip'
import Edit from '../../assets/Edit'
import Minus from '../../assets/Minus'
import Plus from '../../assets/Plus'
import RecurButton from '../RecurButton'

import styles from './styles.css'

const Task = ({ title }) => {
  return (
    <React.Fragment>
      <h1 className={styles.title}>{title}</h1>
      <Minus />
      <input type="checkbox" />
      <Plus />
      <RecurButton />
      <Edit customStyleObject={{ margin: '0 5px 0 0' }} />
      <Delete />
    </React.Fragment>
  )
}

export default Task
