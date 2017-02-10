import { observable, action } from 'mobx'

import RootStore from './rootStore'

class UiStore {
  @observable isLoaded: boolean = false
  @observable hasError: boolean = false

  private rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action
  setLoaded (isLoaded: boolean) {
    this.isLoaded = isLoaded
  }
}

export default UiStore
