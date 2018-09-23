import React from 'react'

import DecrementOccurrence from './DecrementOccurrence'
import IncrementOccurrence from './IncrementOccurrence'

const Occurrences = () => {
  return (
    <React.Fragment>
      <DecrementOccurrence />    
      <input type="checkbox" />
      <IncrementOccurrence />
    </React.Fragment>
  )
}

export default Occurrences
