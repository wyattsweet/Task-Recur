import React from 'react'
import styles from './tabs.css'

const Tabs = ({ children }) => {
  return <div className={styles.tabs}>{children}</div>
}

export default Tabs
