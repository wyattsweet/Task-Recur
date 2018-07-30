import React from 'react'

const Loader = ({ children, loading }) => {
  return loading ? (
    <div>
      <h1>We are Loading</h1>
    </div>
  ) : (
    children
  )
}

export default Loader
