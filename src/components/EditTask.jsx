import React from 'react';
import { MyContext } from './Provider';

class EditTask extends React.Component {
  render() {
    const { id, value } = this.props;
    return (
      <MyContext.Consumer>
        {context => {
          const { cancelOnClick, editTaskSubmit } = context;
          return (
            <React.Fragment>
              <input
                ref={el => (this.input = el)}
                type="text"
                data-id={id}
                name="newTitle"
                defaultValue={value}
              />
              <button
                onClick={() => editTaskSubmit(this.input.value, id)}
                type="submit">
                Update
              </button>
              <button onClick={cancelOnClick}>Cancel</button>
            </React.Fragment>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default EditTask;
