import React from 'react'

import Minus from '../../../../assets/Minus'

const DecrementOccurrence = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <Minus />
    </button>  
  )
}

export default DecrementOccurrence
