import React from 'react'
import { Redirect } from 'react-router-dom'

import Header from '../Header'
import Provider from '../Provider'
// import TaskSection from '../TaskSection'
// import TimeFrameGroup from '../TimeFrameGroup'
import Tabs from './Tabs'
import Tab from './Tabs/Tab'
import TabContent from './Tabs/TabContent'
import TabRow from './Tabs/TabRow'
import Task from './Task'
import User from '../User'

import localStorageHelper from '../../helpers/localStorage'

import styles from './dashboard.css'

// if there is a token stored in localStorage, pass the token to the server and request all of the users tasks.
// If 401 is returned – delete saved token and redirect to /login, component Authentication
const Dashboard = () => {
  return localStorageHelper.fetchToken() ? (
    <User>
      <Provider>
        <div className={styles.root}>
          <Header />
          <Tabs>
            <TabRow>
              <Tab label="daily" />
              <Tab label="weekly" />
              <Tab label="monthly" />
            </TabRow>
            <TabContent>
              <Task title={'Hang Shelves'} />
            </TabContent>
          </Tabs>
        </div>
      </Provider>
    </User>
  ) : (
    <Redirect to="/" />
  )
}

export default Dashboard
