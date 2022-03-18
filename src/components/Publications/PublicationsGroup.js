import React from 'react'

import PublicationsOfCategory from './PublicationsOfCategory'

const PublicationsGroup = ({ category, activeId }) => (
  <div key={category} className="panel panel-default category active">
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
    <PublicationsOfCategory category={category} activeId={activeId} />
  </div>
)

export default PublicationsGroup
