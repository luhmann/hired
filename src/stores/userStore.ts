import { observable, action } from 'mobx'

import RootStore from './rootStore'

class UserStore {
  @observable authenticated: Promise<boolean>
  uid: string = 'me'

  rootStore: RootStore

  constructor(rootStore: RootStore, uid: string) {
    this.rootStore = rootStore
    this.uid = uid

    // this.authenticate()
    this.authenticated = Promise.resolve(true)
  }

  @action
  authenticate() {
    this.authenticated = this.rootStore.repository.authenticate(this.uid)

    return this.authenticated
  }

}

export default UserStore
