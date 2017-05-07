import { observable, action } from 'mobx'
const values = require('object.values')
import * as log from '../lib/log'

import EntryListStore from './entryListStore'
import ProjectListStore from './projectListStore'
import UserStore from './userStore'
import UiStore from './uiStore'
import { StorageAdapter } from '../storage/'

class RootStore {
  @observable entryListStore: EntryListStore
  @observable projectListStore: ProjectListStore
  @observable userStore: UserStore
  @observable uiStore: UiStore
  storage: StorageAdapter

  constructor(storage: StorageAdapter, uid: string) {
    this.storage = storage
    this.userStore = new UserStore(this, uid)
    this.entryListStore = new EntryListStore(this)
    this.projectListStore = new ProjectListStore(this)
    this.uiStore = new UiStore()

    this.fetchData()
  }

  @action.bound
  async fetchData() {
    try {
      const authenticated = await this.userStore.authenticate()
      if (authenticated === false) {
        throw new Error('Could not authenticate')
      }

      const snapshot = await this.storage.database(this.userStore.uid).once('value')
      const data = snapshot.val() || {}

      if (data.projects) {
        this.projectListStore.hydrate(values(data.projects))
      }

      if (data.entries) {
        this.entryListStore.hydrate(values(data.entries))
      }

      this.uiStore.setLoaded(true)
    } catch (error) {
      log.error('[RootStore]: Error while fetching initial', error)
      this.uiStore.setError(true)
    }
  }
}

export default RootStore
