import React from 'react'
import { Redirect } from 'react-router-dom'

import Loader from './Loader'

import localStorageHelper from '../helpers/localStorage'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      validUser: true,
      loading: true,
      user: null,
    }
  }

  componentDidMount = () => {
    this.fetchUserData()
  }

  removeUser = () => {
    localStorageHelper.removeToken()
    this.setState({
      user: null,
      validUser: false,
    })
  }

  fetchUserData = () => {
    const token = localStorageHelper.fetchToken()
    const headers = { AUTHORIZATION: `Bobcats${token}` }
    return token
      ? fetch('http://localhost:3000/api/v1/user', {
          headers,
          method: 'GET',
        })
          .then(res => res.json())
          .then(res => {
            this.setState({
              loading: false,
              validUser: true,
              user: res.user,
            })
          })
          .catch(err => {
            // do something with the err here
            console.error(err)
            this.setState({
              validUser: false,
            })
          })
      : this.setState({ validUser: false })
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        removeUser: this.removeUser,
        user: this.state.user,
      })
    })
    // fetch user data, if valid render children otherwise redirect to login
    return this.state.validUser ? (
      <Loader loading={this.state.loading}>{children}</Loader>
    ) : (
      <Redirect to="/" />
    )
  }
}

export default User
