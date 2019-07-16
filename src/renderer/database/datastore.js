import Datastore from 'lowdb'
import LodashId from 'lodash-id'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'
import fs from 'fs-extra'
import { remote, app } from 'electron'

const APP = process.type === 'renderer' ? remote.app : app
const STORE_PATH = APP.getPath('userData')
console.log(STORE_PATH)
if (process.type !== 'renderer') {
  if (!fs.pathExistsSync(STORE_PATH)) {
    fs.mkdirpSync(STORE_PATH)
  }
}

const adapter = new FileSync(path.join(STORE_PATH, '/datastore.json'))

const db = Datastore(adapter)
db._.mixin(LodashId)

if (!db.has('undolist').value()) {
  db.set('undolist', []).write()
}

if (!db.has('dolist').value()) {
  db.set('dolist', []).write()
}
export default db
