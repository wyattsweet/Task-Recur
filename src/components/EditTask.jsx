import React from 'react';

const EditTask = ({ cancelOnClick, editTaskSubmit, id, value }) => {
  return (
    <form onSubmit={editTaskSubmit}>
      <input type="text" data-id={id} name="newTitle" defaultValue={value} />
      <button type="submit">Update</button>
      <button onClick={cancelOnClick}>Cancel</button>
    </form>
  );
};

export default EditTask;
