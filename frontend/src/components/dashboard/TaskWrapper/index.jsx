import React from 'react'

import styles from './styles.css'

const TaskWrapper = ({ children }) => {
  return <div className={styles.taskWrapper}>{children}</div>
}

export default TaskWrapper
