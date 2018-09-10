import React from 'react'

import AddTask from './AddTask'
import Header from '../Header'
import Tab from './Tabs/Tab'
import TabsWithData from './Tabs/TabsWithData'
import TabContent from './Tabs/TabContent'
import TabRow from './Tabs/TabRow'
import Task from './Task'
import TaskWrapper from './TaskWrapper'

import styles from './dashboard.css'

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.subscribeToNewTasks()
  }

  render() {
    const { onDelete, tasks } = this.props
    return (
      <div className={styles.root}>
        <Header />
        <TabsWithData>
          <TabRow>
            <Tab label="daily" />
            <Tab label="weekly" />
            <Tab label="monthly" />
          </TabRow>
          <TabContent>
            {tasks
              // TODO: the query should filter out active tasks, but I couldn't get it to work
              .filter(task => {
                return task.active
              })
              .map(task => {
                return (
                  <TaskWrapper key={task.id}>
                    <Task task={task} onDelete={onDelete} />
                  </TaskWrapper>
                )
              })}
            <TaskWrapper>
              <AddTask />
            </TaskWrapper>
          </TabContent>
        </TabsWithData>
      </div>
    )
  }
}

export default Dashboard
