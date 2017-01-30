import { observable, action } from 'mobx'
import { Fb } from '../storage/firebase'

class UiStore {
  @observable isAuthenticated: boolean = false

  constructor() {
    this.authenticate = this.authenticate.bind(this)
  }

  @action
  authenticate() {
    if (this.isAuthenticated) {
      return Promise.resolve()
    } else {
      return Fb
        .authenticate()
        .then(action('auth-callback', () => {
          this.isAuthenticated = true
          return Promise.resolve()
        }))
    }
  }

}

const singleton = new UiStore()

export { UiStore }
export default singleton
