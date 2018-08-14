import React from 'react'
import styles from './styles.css'

const TabContent = ({ children }) => {
  return <div className={styles.tabContent}>{children}</div>
}

export default TabContent
