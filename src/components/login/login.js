// @flow

import React from 'react'
import { Button } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

import LoginForm from './loginForm.js'

const enhance = compose(
  inject(`store`),
  withHandlers({
    onClick: props => () => props.store.login.logout(),
  }),
  observer,
)

const Login = ({
  store,
  email,
  onClick,
}: { store: Object, email: string, onClick: () => void }) => (
  <div>
    <h1>Login</h1>
    {!email && <LoginForm />}
    {email &&
      <Button className="btn-primary" onClick={onClick}>
        log out
      </Button>}
  </div>
)

Login.displayName = 'Login'

export default enhance(Login)
