import { observable, action } from 'mobx'
import { Fb } from '../storage/firebase'

class UiStore {
  @observable isAuthenticated: boolean = false
  @observable uid: string = 'me'

  @action
  authenticate(uid: string = 'me') {
    if (this.isAuthenticated) {
      return Promise.resolve()
    } else {
      this.uid = uid
      return Fb
        .authenticate(uid)
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
