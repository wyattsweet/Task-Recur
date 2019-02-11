import React from 'react'

import styles from './styles.css'

const truncateTitle = title =>
  title.length > 16 ? `${title.slice(0, 17)}...` : title

const TaskTitle = ({ title }) => {
  return <h1 className={styles.title}>{truncateTitle(title)}</h1>
}

export default TaskTitle
