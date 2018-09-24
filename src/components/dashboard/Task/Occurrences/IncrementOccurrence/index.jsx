import React from 'react'

import Plus from '../../../../assets/Plus'

const IncrementOccurrence = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <Plus />
    </button> 
  )
}

export default IncrementOccurrence
