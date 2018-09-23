import React from 'react'
import { times } from 'lodash'

import { generateUniqId } from '../../../../helpers/utils'

import DecrementOccurrence from './DecrementOccurrence'
import IncrementOccurrence from './IncrementOccurrence'

const Occurrences = ({ occurrences }) => {
  return (
    <React.Fragment>
      <DecrementOccurrence />
      {times(occurrences, () => <input key={generateUniqId()} type="checkbox" />)}
      <IncrementOccurrence />
    </React.Fragment>
  )
}

export default Occurrences
