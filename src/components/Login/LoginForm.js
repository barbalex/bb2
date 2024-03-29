import React, { useContext, useState, useCallback } from 'react'
import {
  Alert,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap'
import isObject from 'lodash/isObject'
import { observer } from 'mobx-react-lite'
import styled from '@emotion/styled'
import { signInWithEmailAndPassword } from 'firebase/auth'

import validateEmail from './validateEmail'
import storeContext from '../../storeContext'
import { navigate } from 'gatsby'

const StyledAlert = styled(Alert)`
  margin-bottom: 8px;
`
const ValidateDivAfterRBC = styled.div`
  color: #a94442;
  margin-top: -15px;
  margin-bottom: 5px;
`
const Note = styled.div`
  margin-top: 10px;
`

const LoginForm = () => {
  const store = useContext(storeContext)

  const [invalidEmail, changeInvalidEmail] = useState(false)
  const [invalidPassword, changeInvalidPassword] = useState(false)
  const [newEmail, changeNewEmail] = useState('')
  const [password, changePassword] = useState('')
  const [loginError, changeLoginError] = useState('')

  const validEmail = useCallback((newEmail) => {
    const validEmail = newEmail && validateEmail(newEmail)
    const invalidEmail = !validEmail
    changeInvalidEmail(invalidEmail)
    return !!validEmail
  }, [])
  const validPassword = useCallback((password) => {
    const validPassword = !!password
    const invalidPassword = !validPassword
    changeInvalidPassword(invalidPassword)
    return validPassword
  }, [])
  const validSignin = useCallback(
    (newEmail, password) => {
      return validEmail(newEmail) && validPassword(password)
    },
    [validEmail, validPassword],
  )
  const checkSignin = useCallback(
    async (newEmail, password) => {
      if (validSignin(newEmail, password)) {
        try {
          await signInWithEmailAndPassword(
            store.login.firebaseAuth,
            newEmail,
            password,
          )
        } catch (error) {
          changeNewEmail(null)
          changeLoginError(error)
        }
        setTimeout(() => navigate('/events/'), 500)
      }
    },
    [store.login, validSignin],
  )
  const onKeyDownEmail = useCallback(
    (event) => {
      const enter = 13
      if (event.keyCode === enter) {
        // if enter was pressed, update the value first
        const newEmail = event.target.value
        changeNewEmail(newEmail)
        checkSignin(newEmail, password)
      }
    },
    [checkSignin, password],
  )
  const onKeyDownPassword = useCallback(
    (event) => {
      const enter = 13
      if (event.keyCode === enter) {
        // if enter was pressed, update the value first
        const password = event.target.value
        changePassword(password)
        checkSignin(newEmail, password)
      }
    },
    [checkSignin, newEmail],
  )
  const onBlurEmail = useCallback(
    (event) => {
      const newEmail = event.target.value
      changeNewEmail(newEmail)
      validEmail(newEmail)
    },
    [validEmail],
  )
  const onBlurPassword = useCallback(
    (event) => changePassword(event.target.value),
    [],
  )
  const onAlertDismiss = useCallback(() => changeLoginError(null), [])
  const onClickLogin = useCallback(
    () => checkSignin(newEmail, password),
    [checkSignin, newEmail, password],
  )

  const emailInputBsStyle = invalidEmail ? 'error' : null
  const passwordInputBsStyle = invalidPassword ? 'error' : null
  let error = loginError
  if (isObject(loginError)) {
    error = loginError.message
  }
  const isError = error && error.length > 0

  return (
    <form className="form" autoComplete="off">
      <div className="formGroup">
        <FormGroup controlId="email">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="email"
            id="email"
            bsSize="small"
            className="controls"
            bsStyle={emailInputBsStyle}
            onBlur={onBlurEmail}
            onKeyDown={onKeyDownEmail}
            required
            autoFocus
          />
        </FormGroup>
        {invalidEmail && (
          <ValidateDivAfterRBC>Please check email</ValidateDivAfterRBC>
        )}
      </div>
      <div className="formGroup">
        <FormGroup controlId="password">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            id="password"
            bsSize="small"
            className="controls"
            bsStyle={passwordInputBsStyle}
            onBlur={onBlurPassword}
            onKeyDown={onKeyDownPassword}
            required
          />
        </FormGroup>
        {invalidPassword && (
          <ValidateDivAfterRBC>Please check password</ValidateDivAfterRBC>
        )}
      </div>
      {isError && (
        <StyledAlert bsStyle="danger" onDismiss={onAlertDismiss}>
          Error: {error}
        </StyledAlert>
      )}
      <Button className="btn-primary" onClick={onClickLogin}>
        log in
      </Button>
      <Note>Logging in is only meant for Site-Maintainers.</Note>
    </form>
  )
}

export default observer(LoginForm)
