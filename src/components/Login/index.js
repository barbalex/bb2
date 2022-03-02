//

import React, { useContext, useCallback } from 'react'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import DocumentTitle from 'react-document-title'

import LoginForm from './LoginForm'
import storeContext from '../../storeContext'

const Login = () => {
  const store = useContext(storeContext)
  const { email: uid, logout } = store.login

  const onClickLogout = useCallback(() => logout(), [logout])

  return (
    <DocumentTitle title="blue-borders | Login">
      <div>
        <h1>Login</h1>
        {!uid && <LoginForm />}
        {uid && (
          <Button className="btn-primary" onClick={onClickLogout}>
            log out
          </Button>
        )}
      </div>
    </DocumentTitle>
  )
}

export default observer(Login)
