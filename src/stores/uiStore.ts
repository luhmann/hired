import { observable, action } from 'mobx'

import { ROUTE_NAMES } from '../lib/router'
import RootStore from './rootStore'

interface currentViewInterface {
  name: string,
  projectId?: string
}

class UiStore {
  @observable isLoaded: boolean = false
  @observable hasError: boolean = false
  @observable currentView: currentViewInterface = {
    name: ROUTE_NAMES.projectList
  }

  private rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action
  showProjectList(): void {
    this.currentView = {
      name: ROUTE_NAMES.projectList
    }
  }

  @action
  showProject(projectId: string): void {
    this.currentView = {
      name: ROUTE_NAMES.projectOverview,
      projectId
    }
  }

  @action
  showNewProject(): void {
    this.currentView = {
      name: ROUTE_NAMES.projectNew
    }
  }

  @action
  setLoaded (isLoaded: boolean) {
    this.isLoaded = isLoaded
  }

  @action
  setError (status: boolean) {
    this.hasError = status
  }
}

export default UiStore
