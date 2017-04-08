import { observable, action } from 'mobx'
const values = require('object.values')
import * as log from '../lib/log'

import EntryListStore from './entryListStore'
import ProjectListStore from './projectListStore'
import UserStore from './userStore'
import UiStore from './uiStore'
import FirebaseRepository from '../storage/firebaseRepository'
import RouterStore from './routerStore'

class RootStore {
  @observable entryListStore: EntryListStore
  @observable projectListStore: ProjectListStore
  @observable userStore: UserStore
  @observable uiStore: UiStore
  routerStore: RouterStore
  repository: FirebaseRepository

  constructor(repository: FirebaseRepository, uid: string) {
    this.repository = repository
    this.userStore = new UserStore(this, uid)
    this.entryListStore = new EntryListStore(this)
    this.projectListStore = new ProjectListStore(this)
    this.uiStore = new UiStore()
    this.routerStore = new RouterStore(this)

    this.fetchData()
  }

  @action.bound
  async fetchData() {
    try {
      await this.userStore.authenticated
      const snapshot = await this.repository.database(this.userStore.uid).once('value')
      const data = snapshot.val()

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
