import React from 'react'
import { Redirect } from 'react-router-dom'

import Header from '../Header'
import Provider from '../Provider'
// import TaskSection from '../TaskSection'
// import TimeFrameGroup from '../TimeFrameGroup'
import Tabs from '../sitewide/Tabs'
import Tab from '../sitewide/Tabs/Tab'
import TabContent from '../sitewide/Tabs/TabContent'
import TabRow from '../sitewide/Tabs/TabRow'
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
              <Tab />
              <Tab />
              <Tab />
            </TabRow>
            <TabContent />
          </Tabs>
        </div>
      </Provider>
    </User>
  ) : (
    <Redirect to="/" />
  )
}

export default Dashboard
