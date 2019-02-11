import React from 'react'

import styles from './styles.css'

import { generateUniqId } from '../../../helpers/utils'

const RecurButton = ({ handleRecurChange, recurring }) => {
  const uniqId = generateUniqId()
  return (
    <div className={styles.container}>
      <input
        onChange={handleRecurChange}
        id={uniqId}
        className={styles.input}
        type="checkbox"
        defaultChecked={recurring}
      />
      <label htmlFor={uniqId} className={styles.label}>
        <span className={styles.inner} />
      </label>
    </div>
  )
}

export default RecurButton
