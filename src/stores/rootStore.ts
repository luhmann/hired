import { observable, action, reaction } from 'mobx'

import EntryListStore from './entryListStore'
import ProjectListStore from './projectListStore'
import UserStore from './userStore'
import UiStore from './uiStore'
import FirebaseRepository from '../storage/firebaseRepository'
import Router from '../lib/router'

class RootStore {
  @observable entryListStore: EntryListStore
  @observable projectListStore: ProjectListStore
  @observable userStore: UserStore
  @observable uiStore: UiStore
  router: Router
  repository: FirebaseRepository

  constructor(repository: FirebaseRepository, uid: string) {
    this.repository = repository
    this.userStore = new UserStore(this, uid)
    this.entryListStore = new EntryListStore(this)
    this.projectListStore = new ProjectListStore(this)
    this.uiStore = new UiStore(this)
    this.router = new Router(this)

    this.fetchData()

    reaction(
      () => this.entryListStore.toStorage,
      (entries) => {
        if (entries) {
          // tslint:disable-next-line
          console.log('in entry reaction', entries)
          this.repository.entries(this.userStore.uid).set(entries)
        }
      }
    )
  }

  @action.bound
  fetchData() {
    this.userStore.authenticated
      .then(() => (this.repository.database(this.userStore.uid).once('value')))
      .then((snapshot) => {
        const data = snapshot.val()

        if (data.projects && data.projects.length) {
          this.projectListStore.hydrate(data.projects)
        }

        if (data.entries && data.entries.length) {
          this.entryListStore.hydrate(data.entries)
        }

        this.uiStore.setLoaded(true)
      })
  }
}

export default RootStore
