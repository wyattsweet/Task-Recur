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
    }
  }

  componentDidMount = () => {
    this.fetchUserData()
  }

  fetchUserData = () => {
    const token = localStorageHelper.fetchToken()
    const headers = { AUTHORIZATION: `Bobcats${token}` }
    return !token
      ? this.setState({ validUser: false })
      : fetch('http://localhost:3000/api/v1/user', {
          headers,
          method: 'GET',
        })
          .then(res => res.json())
          .then(res => {
            console.log(res)
            this.setState({
              loading: false,
              validUser: true,
            })
          })
          .catch(err => {
            // do something with the err here
            this.setState({
              validUser: false,
            })
          })
  }

  render() {
    // fetch user data, if valid render children otherwise redirect to login
    if (this.state.validUser) {
      return <Loader loading={this.state.loading}>{this.props.children}</Loader>
    }
    return <Redirect to="/login" />
  }
}

export default User
