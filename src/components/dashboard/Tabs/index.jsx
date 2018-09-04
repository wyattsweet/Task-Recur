import React from 'react'
import styles from './tabs.css'

const Tabs = (props) => {
  return <div className={styles.tabs}>{props.children}</div>
}

export default Tabs
