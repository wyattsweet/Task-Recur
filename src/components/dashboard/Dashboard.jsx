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

const Dashboard = () => {
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
          <TaskWrapper>
            <Task title="Hang Shelves" />
          </TaskWrapper>
          <TaskWrapper>
            <Task title="Something else" />
          </TaskWrapper>
          <TaskWrapper>
            <AddTask />
          </TaskWrapper>
        </TabContent>
      </TabsWithData>
    </div>
  )
}

export default Dashboard
