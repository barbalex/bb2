//
import React, { useCallback } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { gql, useApolloClient } from '@apollo/client'

const ModalRemoveArticle = ({ doc, setRemove }) => {
  const client = useApolloClient()

  const abort = useCallback(() => setRemove(false), [setRemove])
  const remove = useCallback(async () => {
    try {
      await client.mutate({
        mutation: gql`
          mutation DeleteArticleForRemoveArticleModal($id: uuid!) {
            delete_article_by_pk(id: $id) {
              id
            }
          }
        `,
        variables: { id: doc?.id },
        refetchQueries: ['ArticleIdsForArticles'],
      })
    } catch (error) {
      console.log(error)
    }
    setRemove(false)
  }, [client, doc?.id, setRemove])

  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{`Remove article "${doc?.title}"`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {`Are you sure you want to remove article "${doc?.title}
            "?`}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="danger" onClick={remove}>
            yes, remove!
          </Button>
          <Button onClick={abort}>no!</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

ModalRemoveArticle.displayName = 'ModalRemoveArticle'

export default observer(ModalRemoveArticle)
