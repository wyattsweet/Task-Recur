import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import React from 'react'

const LoginForm = ({
  email,
  password,
  onEmailChange,
  onLoginSubmit,
  onPasswordChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="emailContainer">
        <Input
          type="email"
          value={email}
          placeholder="email"
          onChange={onEmailChange}
        />
      </div>
      <div className="passwordContainer">
        <Input
          type="password"
          placeholder="password"
          onChange={onPasswordChange}
          value={password}
        />
      </div>
      <Button type="submit" onClick={onLoginSubmit} variant="contained">
        Sign In
      </Button>
    </form>
  )
}

export default LoginForm
