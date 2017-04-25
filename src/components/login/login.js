// @flow

import React from 'react'
import { Button } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'

import LoginForm from './loginForm.js'

const enhance = compose(inject(`store`), observer)

const Login = ({ email, store }: { email: string, store: Object }) => (
  <div>
    <h1>Login</h1>
    {!email && <LoginForm />}
    {email &&
      <Button className="btn-primary" onClick={() => store.login.logout()}>
        log out
      </Button>}
  </div>
)

Login.displayName = 'Login'

export default enhance(Login)
