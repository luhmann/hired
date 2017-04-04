import { observable, action } from 'mobx'

import { ROUTE_NAMES } from './routerStore'

interface CurrentViewInterface {
  name: string,
  projectId?: string
}

class UiStore {
  @observable isLoaded: boolean = false
  @observable hasError: boolean = false
  @observable currentView: CurrentViewInterface = {
    name: ROUTE_NAMES.projectList
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
  setLoaded (isLoaded: boolean): void {
    this.isLoaded = isLoaded
  }

  @action
  setError (status: boolean): void {
    this.hasError = status
  }
}

export default UiStore
