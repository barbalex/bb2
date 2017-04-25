// @flow
import extendStore from './extend'

function Store(): void {
  this.page = {
    activePage: null,
    editing: false,
    showMeta: false,
    getPage: null,
    savePage: null,
    addPageAttachments: null,
    removePageAttachment: null,
    onSavePage: null
  }
}

const MyStore = new Store()

extendStore(MyStore)

export default MyStore
