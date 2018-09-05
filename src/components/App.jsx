import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'

import localStorageHelper from '../helpers/localStorage'

import Authentication from './Authentication'
import DashboardContainer from './dashboard'

const App = () => {
  const token = localStorageHelper.fetchToken()
  return (
    <BrowserRouter>
      <div>
        <Route
          exact
          path="/"
          render={() =>
            token ? <Redirect to="/dashboard" /> : <Authentication />
          }
        />
        <Route path="/dashboard" component={DashboardContainer} />
      </div>
    </BrowserRouter>
  )
}

export default App
