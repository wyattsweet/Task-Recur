import React from 'react'

import styles from './styles.css'

const RecurButton = () => {
  // TODO: replace this with a true unique id generator
  const uniqId = Math.ceil(Math.random() * 10)

  return (
    <div className={styles.container}>
      <input id={uniqId} className={styles.input} type="checkbox" />
      <label htmlFor={uniqId} className={styles.label}>
        <span className={styles.inner} />
      </label>
    </div>
  )
}

export default RecurButton
