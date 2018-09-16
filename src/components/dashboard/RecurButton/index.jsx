import React from 'react'

import styles from './styles.css'

const RecurButton = ({ handleRecurChange, recurring }) => {
  // TODO: replace this with a true unique id generator
  const uniqId = Math.ceil(Math.random() * 1000)
  return (
    <div className={styles.container}>
      <input onChange={handleRecurChange} value={true} id={uniqId} className={styles.input} type="checkbox" defaultChecked={recurring} />
      <label htmlFor={uniqId} className={styles.label}>
        <span className={styles.inner} />
      </label>
    </div>
  )
}

export default RecurButton
