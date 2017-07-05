// @flow
import React from 'react'
import { observer } from 'mobx-react'
import compose from 'recompose/compose'

import AttachedImgagesList from './attachedImgagesList'
import AttachImages from './attachImages'

const enhance = compose(observer)

const AttachedImages = ({ doc }: { doc: Object }) =>
  <div>
    <AttachedImgagesList doc={doc} />
    <AttachImages doc={doc} />
  </div>

AttachedImages.displayName = 'AttachedImages'

export default enhance(AttachedImages)
