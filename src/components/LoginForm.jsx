import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import React from 'react';

const LoginForm = ({ onEmailChange, onLoginSubmit, onPasswordChange }) => {
  return (
    <React.Fragment>
      <div className="emailContainer">
        <Input type="email" placeholder="email" onChange={onEmailChange} />
      </div>
      <div className="passwordContainer">
        <Input
          type="password"
          placeholder="password"
          onChange={onPasswordChange}
        />
      </div>
      <Button onClick={onLoginSubmit} variant="contained">
        Sign In
      </Button>
    </React.Fragment>
  );
};

export default LoginForm;
