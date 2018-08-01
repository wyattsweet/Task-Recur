import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'

import localStorageHelper from '../helpers/localStorage'

import Authentication from './Authentication'
import Dashboard from './dashboard'

// TODO: if token is expired: delete and redirect to /login

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
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  )
}

export default App
