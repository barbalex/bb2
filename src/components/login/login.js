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

const Login = ({ store, onClick }: { store: Object, onClick: () => void }) => (
  <div>
    <h1>Login</h1>
    {!store.login.email && <LoginForm />}
    {store.login.email &&
      <Button className="btn-primary" onClick={onClick}>
        log out
      </Button>}
  </div>
)

Login.displayName = 'Login'

export default enhance(Login)
