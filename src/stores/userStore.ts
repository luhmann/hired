import { observable, action } from 'mobx'

import RootStore from './rootStore'

class UserStore {
  @observable authenticated: boolean
  uid: string

  private rootStore: RootStore

  constructor(rootStore: RootStore, uid: string) {
    this.rootStore = rootStore
    this.uid = uid
  }

  @action.bound
  async authenticate() {
    const response = await this.rootStore.repository.authenticate(this.uid)
    this.authenticated = (response.uid === this.uid)

    return this.authenticated
  }

}

export default UserStore
