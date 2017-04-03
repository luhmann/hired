import { observable, action } from 'mobx'
const values = require('object.values')

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
  router: RouterStore
  repository: FirebaseRepository

  constructor(repository: FirebaseRepository, uid: string) {
    this.repository = repository
    this.userStore = new UserStore(this, uid)
    this.entryListStore = new EntryListStore(this)
    this.projectListStore = new ProjectListStore(this)
    this.uiStore = new UiStore()
    this.router = new RouterStore(this)

    this.fetchData()
  }

  @action.bound
  fetchData() {
    this.userStore.authenticated
      .then(() => (this.repository.database(this.userStore.uid).once('value')))
      .then((snapshot) => {
        const data = snapshot.val()

        if (data.projects) {
          this.projectListStore.hydrate(values(data.projects))
        }

        if (data.entries) {
          this.entryListStore.hydrate(values(data.entries))
        }

        this.uiStore.setLoaded(true)
      })
  }
}

export default RootStore
