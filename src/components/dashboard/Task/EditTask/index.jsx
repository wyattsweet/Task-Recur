import React from 'react'

const EditTask = ({handleEdit, handleTitleChange, id, title}) => {
  return (
    <form onSubmit={(e) => handleEdit(id, title, e)}>
      <input type="text" value={title} onChange={handleTitleChange} /> 
      <input type="submit" value="Update" />
    </form>
  )
}

export default EditTask
