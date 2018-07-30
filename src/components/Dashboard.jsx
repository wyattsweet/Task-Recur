import React from 'react'
import { Redirect } from 'react-router-dom'

import Header from './Header'
import Provider from './Provider'
import TaskSection from './TaskSection'
import TimeFrameGroup from './TimeFrameGroup'
import User from './User'

import localStorageHelper from '../helpers/localStorage'

// if there is a token stored in localStorage, pass the token to the server and request all of the users tasks.
// If 401 is returned – delete saved token and redirect to /login, component Authentication
const Dashboard = () => {
  return localStorageHelper.fetchToken() ? (
    <User>
      <Provider>
        <Header />
        <TaskSection>
          <TimeFrameGroup group="daily" />
          <TimeFrameGroup group="weekly" />
          <TimeFrameGroup group="monthly" />
        </TaskSection>
      </Provider>
    </User>
  ) : (
    <Redirect to="/" />
  )
}

export default Dashboard
