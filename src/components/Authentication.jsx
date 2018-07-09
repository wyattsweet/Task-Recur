import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import AppBar from '@material-ui/core/AppBar';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

import styles from './Authentication.css';

class Login extends React.Component {
  state = {
    email: null,
    password: null,
    value: 0
  };

  onLoginSubmit = () => {
    console.log('login click');
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
          />
        ) : (
          <SignUpForm />
        )}
      </div>
    );
  }
}

export default Login;
