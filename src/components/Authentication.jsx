import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import localStorageHelper from '../helpers/localStorage'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

import styles from './Authentication.css'

class Authentication extends React.Component {
  state = {
    email: '',
    password: '',
    value: 0,
  }

  fetchToken = () => {
    const { email, password } = this.state
    const headers = {
      'content-type': 'application/json; charset=utf-8',
    }
    const data = { email, password }
    this.setState({ email: '', password: '' })
    fetch('http://localhost:3000/api/v1/login', {
      headers,
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        localStorageHelper.saveToken(res.jwt)
      })
      .catch(err => {
        // TODO: properly handle error here
        console.log(err)
      })
  }

  onEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  onPasswordChange = e => {
    this.setState({ password: e.target.value })
  }

  onTabChange = (event, value) => {
    this.setState({ value })
  }

  onSubmit = e => {
    e.preventDefault()
    this.fetchToken()
    this.setState({ email: '', password: '' })
  }

  render() {
    const { email, password, value } = this.state
    return (
      <div className={styles.root}>
        <Tabs value={value} onChange={this.onTabChange}>
          <Tab label="Signing In" />
          <Tab label="Sign Up" />
        </Tabs>
        {value === 0 ? (
          <LoginForm
            email={email}
            password={password}
            onEmailChange={this.onEmailChange}
            onPasswordChange={this.onPasswordChange}
            onSubmit={this.onSubmit}
          />
        ) : (
          <SignUpForm />
        )}
      </div>
    )
  }
}

export default Authentication
