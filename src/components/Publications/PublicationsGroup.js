import React, { useCallback, useContext } from 'react'
import { observer } from 'mobx-react-lite'

import storeContext from '../../storeContext'
import PublicationsOfCategory from './PublicationsOfCategory'

const PublicationsGroup = ({ category }) => {
  const store = useContext(storeContext)
  const { setPublicationCategory } = store.publications

  const onClickCategory = useCallback(() => setPublicationCategory(category), [
    category,
    setPublicationCategory,
  ])

  return (
    <div
      key={category}
      className="panel panel-default category active"
      onClick={onClickCategory}
    >
      <div className="panel-heading" role="tab" id={`heading${category}`}>
        <h4 className="panel-title">
          <a
            className="collapsed"
            role="button"
            data-toggle="collapse"
            data-parent="#publicationsAccordion"
            href={`#${category}`}
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            {category}
          </a>
        </h4>
      </div>
      <PublicationsOfCategory category={category} />
    </div>
  )
}

export default observer(PublicationsGroup)
