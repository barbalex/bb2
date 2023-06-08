//
import React, { useState, useCallback } from 'react'
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

import Editor from '../../Editor'
import hex2a from '../../../modules/hex2a'
import categories from '../categories'

const Container = styled.div`
  h2 {
    font-size: medium;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .mce-tinymce {
    margin: -15px;
    width: calc(100% + 27px) !important;
  }
`
const StyledForm = styled(Form)`
  margin-top: 5px;
`
const StyledFormGroup = styled(FormGroup)`
  margin-bottom: 5px !important;
  .col-sm-1 {
    padding-right: 0 !important;
  }
`
const ErrorAlert = styled(Alert)`
  margin-bottom: 10px;
`

const categoryOptions = (publicationCategories) => {
  const options = publicationCategories.map((category, index) => (
    <option key={index + 1} value={category}>
      {category}
    </option>
  ))
  options.unshift(<option key={0} value={null} />)
  return options
}

const PublicationEditing = ({ doc }) => {
  const client = useApolloClient()

  const [title, setTitle] = useState(doc.title)
  const [category, setCategory] = useState(doc.category)
  const [error, setError] = useState('')

  const onChangeTitle = useCallback((event) => setTitle(event.target.value), [])
  const onBlurTitle = useCallback(() => {
    try {
      client.mutate({
        mutation: gql`
          mutation UpdatePublicationTitleForPublication(
            $id: uuid!
            $title: String
          ) {
            update_publication_by_pk(
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
  }, [client, doc?.id, title])

  const onChangeCategory = useCallback(
    (event) => {
      setCategory(event.target.value)
      try {
        client.mutate({
          mutation: gql`
            mutation UpdatePublicationCategoryForPublication(
              $id: uuid!
              $category: String
            ) {
              update_publication_by_pk(
                pk_columns: { id: $id }
                _set: { category: $category }
              ) {
                id
                category
              }
            }
          `,
          variables: { id: doc.id, category },
        })
      } catch (error) {
        setError({ error })
      }
    },
    [category, client, doc?.id],
  )

  const contentDecoded = hex2a(doc.content)

  return (
    <Container>
      <StyledForm horizontal>
        <StyledFormGroup controlId="event">
          <Col componentClass={ControlLabel} sm={1}>
            Title
          </Col>
          <Col sm={11}>
            <FormControl
              type="text"
              value={title}
              onChange={onChangeTitle}
              onBlur={onBlurTitle}
              tabIndex={1}
              autoFocus
            />
          </Col>
        </StyledFormGroup>
        <StyledFormGroup controlId="category">
          <Col componentClass={ControlLabel} sm={1}>
            Category
          </Col>
          <Col sm={11}>
            <FormControl
              componentClass="select"
              value={category}
              onChange={onChangeCategory}
              tabIndex={2}
            >
              {categoryOptions(categories)}
            </FormControl>
          </Col>
        </StyledFormGroup>
      </StyledForm>
      {error && <ErrorAlert bsStyle="danger">{error}</ErrorAlert>}
      <Editor docType="publication" doc={doc} contentDecoded={contentDecoded} />
    </Container>
  )
}

export default PublicationEditing
