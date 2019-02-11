import React from 'react';
import { MyContext } from './Provider';

import styles from './EditTask.css';

class EditTask extends React.Component {
  render() {
    const { id, value } = this.props;
    return (
      <MyContext.Consumer>
        {context => {
          const { cancelOnClick, editTaskSubmit } = context;
          return (
            <div>
              <input
                className={styles.editInput}
                ref={el => (this.input = el)}
                type="text"
                data-id={id}
                name="newTitle"
                defaultValue={value}
              />
              <button
                className={styles.submit}
                onClick={() => editTaskSubmit(this.input.value, id)}
                type="submit">
                Update
              </button>
              <button
                type="button"
                className={styles.cancel}
                onClick={cancelOnClick}>
                Cancel
              </button>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default EditTask;
