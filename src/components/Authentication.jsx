import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import AppBar from '@material-ui/core/AppBar';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

import styles from './Authentication.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    value: 0
  };

  onLoginSubmit = () => {
    const { email, password } = this.state;
    const headers = {
      'content-type': 'application/json; charset=utf-8'
    };
    const data = { email, password };
    this.setState({ email: '', password: '' });
    fetch('http://localhost:3000/api/v1/login', {
      headers,
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onTabChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.root}>
        <Tabs value={value} onChange={this.onTabChange}>
          <Tab label="Signing In" />
          <Tab label="Sign Up" />
        </Tabs>
        {value === 0 ? (
          <LoginForm
            onEmailChange={this.onEmailChange}
            onLoginSubmit={this.onLoginSubmit}
            onPasswordChange={this.onPasswordChange}
            email={this.state.email}
            password={this.state.password}
          />
        ) : (
          <SignUpForm />
        )}
      </div>
    );
  }
}

export default Login;
