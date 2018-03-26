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
          const children = React.Children.map(this.props.children, child => {
            const { group } = child.props;
            return React.cloneElement(child, {
              inputRef: el => setInputField(group, el),
              tasks: this.selectTasksByTimeFrame(group, tasks)
            });
          });
          return <main className={styles.main}>{children}</main>;
        }}
      </MyContext.Consumer>
    );
  }
}

export default TaskSection;
