//
import React, { useContext, useState, useCallback } from 'react'
import { observer } from 'mobx-react-lite'
import styled from '@emotion/styled'
import { gql, useApolloClient } from '@apollo/client'
import {
  Alert,
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
} from 'react-bootstrap'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'

import Editor from '../../Editor'
import storeContext from '../../../storeContext'
import hex2a from '../../../modules/hex2a'

const Container = styled.div`
  p,
  .row,
  table {
    margin-bottom: 20px;
  }
  h2 {
    text-align: center;
    font-size: x-large;
    font-weight: 800;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  h3 {
    text-align: center;
    font-size: large;
    font-weight: 800;
    margin-top: 40px;
    margin-bottom: 20px;
  }
`
const StyledForm = styled(Form)`
  margin-top: 5px;
`
const StyledFormGroup = styled(FormGroup)`
  margin-bottom: 5px !important;
`
const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  min-height: 34px;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`
const ErrorAlert = styled(Alert)`
  margin-bottom: 10px;
`

const dateFormat = [
  'dd.MM.yyyy',
  'd.MM.yyyy',
  'd.M.yyyy',
  'dd.M.yyyy',
  'dd.MM.yy',
  'd.MM.yy',
  'd.M.yy',
  'dd.M.yy',
  'd.M',
  'd.MM',
  'dd.M',
  'dd.MM',
  'd',
  'dd',
]

const Article = ({ doc }) => {
  const client = useApolloClient()
  const store = useContext(storeContext)

  const [title, setTitle] = useState(doc.title)
  const [datum, setDatum] = useState(dayjs(doc.datum, 'YYYY-MM-DD'))
  const [error, setError] = useState(null)

  console.log('Article', { docDatum: doc.datum, datum })

  const onChangeTitle = useCallback((event) => setTitle(event.target.value), [])
  const onBlurTitle = useCallback(() => {
    try {
      client.mutate({
        mutation: gql`
          mutation UpdateArticleTitleForArticle($id: uuid!, $title: String) {
            update_article_by_pk(
              pk_columns: { id: $id }
              _set: { title: $title }
            ) {
              id
              title
            }
          }
        `,
        variables: { id: doc.id, title },
      })
    } catch (error) {
      setError({ error })
    }
  }, [client, doc.id, title])

  const onChangeDate = useCallback(
    (dateString) => {
      const date = dayjs(dateString, 'DD.MM.YYYY')
      setDatum(date)
      try {
        client.mutate({
          mutation: gql`
            mutation UpdateArticleDatumForArticle($id: uuid!, $datum: date) {
              update_article_by_pk(
                pk_columns: { id: $id }
                _set: { datum: $datum }
              ) {
                id
                datum
              }
            }
          `,
          variables: {
            id: doc.id,
            datum: dayjs(date, 'YYYY-MM-DD'),
          },
        })
      } catch (error) {
        setError({ error })
      }
    },
    [client, doc.id],
  )

  const selected = dayjs(datum, 'DD.MM.YYYY').isValid()
    ? dayjs(datum, 'DD.MM.YYYY').toDate()
    : null

  const contentDecoded = hex2a(doc.content)

  if (store.editing) {
    return (
      <Container>
        <StyledForm horizontal>
          <StyledFormGroup controlId="articleTitle">
            <Col componentClass={ControlLabel} sm={1}>
              Title
            </Col>
            <Col sm={11}>
              <FormControl
                type="text"
                value={title}
                onChange={onChangeTitle}
                onBlur={onBlurTitle}
                autoFocus
                tabIndex={1}
              />
            </Col>
          </StyledFormGroup>
          <StyledFormGroup controlId="articleDate">
            <Col componentClass={ControlLabel} sm={1}>
              Date
            </Col>
            <Col sm={11}>
              <StyledDatePicker
                selected={selected}
                onChange={onChangeDate}
                dateFormat={dateFormat}
                popperPlacement="auto"
              />
            </Col>
          </StyledFormGroup>
          {error && <ErrorAlert bsStyle="danger">{error}</ErrorAlert>}
        </StyledForm>
        <Editor docType="article" doc={doc} contentDecoded={contentDecoded} />
      </Container>
    )
  }
}

export default observer(Article)
