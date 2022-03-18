/* eslint-disable react-hooks/exhaustive-deps */
//
import React, { useContext, useCallback } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { observer } from 'mobx-react-lite'
import { gql, useApolloClient } from '@apollo/client'

import storeContext from '../../../storeContext'

const MyEditor = ({ doc, docType, contentDecoded }) => {
  const client = useApolloClient()
  const store = useContext(storeContext)

  // height = window - menu height - (menubar + iconbar)
  let height = typeof window !== `undefined` ? window.innerHeight - 52 - 74 : 1
  if (
    ['monthlyEvent', 'publication'].includes(docType) &&
    typeof window !== `undefined`
  ) {
    height = window.innerHeight - 52 - 74 - 76
  }
  if (['article'].includes(docType) && typeof window !== `undefined`) {
    height = window.innerHeight - 52 - 74 - 90
  }
  // need to add specific classes to the iframe body because my css will not apply otherwise
  let bodyClass = ''

  const onSavePageContent = useCallback(
    (content) => {
      // console.log('onSavePageArticle, content:', content)
      try {
        client.mutate({
          mutation: gql`
            mutation UpdateAboutUsContentForEditor(
              $id: uuid!
              $content: bytea
            ) {
              update_page_by_pk(
                pk_columns: { id: $id }
                _set: { content: $content }
              ) {
                id
              }
            }
          `,
          variables: { content, id: doc.id },
        })
      } catch (error) {
        store.error.showError(error)
      }
    },
    [client, doc.id],
  )
  const onSaveArticleContent = useCallback(
    (content) => {
      // console.log('onSaveArticleContent, content:', content)
      try {
        client.mutate({
          mutation: gql`
            mutation UpdateArticleContentForEditor(
              $id: uuid!
              $content: bytea
            ) {
              update_article_by_pk(
                pk_columns: { id: $id }
                _set: { content: $content }
              ) {
                id
              }
            }
          `,
          variables: { content, id: doc.id },
        })
      } catch (error) {
        store.error.showError(error)
      }
    },
    [client, doc.id],
  )
  const onSavePublicationContent = useCallback(
    (content) => {
      // TODO: test
      console.log('onSavePublicationContent, content:', content)
      try {
        client.mutate({
          mutation: gql`
            mutation UpdatePublicationContentForEditor(
              $id: uuid!
              $content: bytea
            ) {
              update_publication_by_pk(
                pk_columns: { id: $id }
                _set: { content: $content }
              ) {
                id
              }
            }
          `,
          variables: { content, id: doc.id },
        })
      } catch (error) {
        store.error.showError(error)
      }
    },
    [client, doc.id],
  )

  let saveFunction = () => {}
  switch (docType) {
    case 'page':
      bodyClass = ''
      saveFunction = onSavePageContent
      break
    case 'publication':
      bodyClass = 'publication'
      saveFunction = onSavePublicationContent
      break
    case 'article':
      bodyClass = 'article'
      saveFunction = onSaveArticleContent
      break
    default:
      return store.error.showError('no or wrong docType passed to editor')
  }

  return (
    <Editor
      id={doc.id}
      apiKey="58ali3ylgj6fv1zfjv6vdjkkt32yjw36v1iypn95psmae799"
      initialValue={contentDecoded}
      init={{
        selector: `#${doc.id}`,
        plugins: [
          'advlist autolink link image lists charmap print hr anchor pagebreak',
          'searchreplace wordcount visualblocks visualchars code fullscreen media nonbreaking',
          'save table contextmenu directionality template paste textcolor autosave',
        ],
        menubar: 'edit insert view format table tools',
        toolbar:
          'insertfile undo redo | styleselect | bold italic underline forecolor backcolor removeformat | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print code fullscreen',
        height,
        browser_spellcheck: true,
        automatic_uploads: false,
        statusbar: false,
        body_class: bodyClass,
        content_css: `./tinymce.css`,
      }}
      onChange={(e) => saveFunction(e.target.getContent())}
    />
  )
}

export default observer(MyEditor)
