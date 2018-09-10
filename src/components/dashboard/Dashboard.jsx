import React from 'react'

import AddTask from './AddTask'
import Header from '../Header'
import Tab from './Tabs/Tab'
import Tabs from './Tabs'
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
    const { data, onDelete, onUpdate } = this.props
    return (
      <div className={styles.root}>
        <Header />
        <Tabs>
          <TabRow>
            <Tab label="daily" />
            <Tab label="weekly" />
            <Tab label="monthly" />
          </TabRow>
          <TabContent>
            {data.loading
              ? null
              : data.listTasks.items
                  .map(task => {
                    return (
                      <TaskWrapper key={task.id}>
                        <Task task={task} onDelete={onDelete} onUpdate={onUpdate} />
                      </TaskWrapper>
                    )
                  })}
            <TaskWrapper>
              <AddTask />
            </TaskWrapper>
          </TabContent>
        </Tabs>
      </div>
    )
  }
}

export default Dashboard
