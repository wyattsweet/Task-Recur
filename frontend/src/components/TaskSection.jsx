import React from 'react';

import { MyContext } from './Provider';

import styles from './TaskSection.css';

class TaskSection extends React.Component {
  selectTasksByTimeFrame = (timeFrame, tasks) => {
    return tasks.filter(task => {
      return timeFrame === task.timeFrame;
    });
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          const { setInputField, tasks } = context;
          const { children } = this.props;
          const modifiedChildren = React.Children.map(children, child => {
            const { group } = child.props;
            return React.cloneElement(child, {
              inputRef: el => setInputField(group, el),
              tasks: this.selectTasksByTimeFrame(group, tasks)
            });
          });
          return <main className={styles.main}>{modifiedChildren}</main>;
        }}
      </MyContext.Consumer>
    );
  }
}

export default TaskSection;
