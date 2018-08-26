import React from 'react'

import AddButton from '../../assets/AddButton'

import styles from './styles.css'

const AddTask = () => {
  return (
    <React.Fragment>
      <AddButton />
      <input className={styles.input} type="text" />
    </React.Fragment>
  )
}

export default AddTask
