import { observable, action } from 'mobx'

import firebaseRepository from '../storage/firebaseRepository'

class UserStore {
  @observable authenticated: Promise<boolean>
  uid: string = 'me'

  repository: firebaseRepository

  constructor(repository: firebaseRepository, uid: string) {
    this.repository = repository
    this.uid = uid
    this.authenticate = action(this.authenticate)

    this.authenticate()
    // this.authenticated = Promise.resolve(true)
  }

  // @action
  authenticate() {
    this.authenticated = this.repository.authenticate(this.uid)

    return this.authenticated
  }

}

export default UserStore
