// @flow
import React from 'react'
import AttachedImgagesList from './attachedImgagesList.js'
import AttachImages from './attachImages.js'

const AttachedImages = ({ doc }: { doc: Object }) => (
  <div>
    <AttachedImgagesList doc={doc} />
    <AttachImages doc={doc} />
  </div>
)

AttachedImages.displayName = 'AttachedImages'

export default AttachedImages
