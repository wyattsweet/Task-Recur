import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import localStorageHelper from '../helpers/localStorage'

import Authentication from './Authentication'
import Dashboard from './Dashboard'

// if there is a token stored in localStorage, pass the token to the server and request all of the users tasks.
// If 401 is returned – delete saved token and redirect to /login, component Authentication
// if there is no token, redirect to /login
// If tasks are returned with saved token, redirect to /dashboard, compoent Dashboard
const App = () => {
  const token = localStorageHelper.fetchToken()
  return (
    <BrowserRouter>
        <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  )
}

export default App
