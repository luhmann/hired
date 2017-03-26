import { observable, action } from 'mobx'

import { ROUTE_NAMES } from '../lib/router'

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

  constructor() {
    this.showProjectList = action(this.showProjectList)
    this.showProject = action(this.showProject)
    this.showNewProject = action(this.showNewProject)
    this.setLoaded = action(this.setLoaded)
    this.setError = action(this.setError)
  }

  showProjectList(): void {
    this.currentView = {
      name: ROUTE_NAMES.projectList
    }
  }

  showProject(projectId: string): void {
    this.currentView = {
      name: ROUTE_NAMES.projectOverview,
      projectId
    }
  }

  showNewProject(): void {
    this.currentView = {
      name: ROUTE_NAMES.projectNew
    }
  }

  setLoaded (isLoaded: boolean): void {
    this.isLoaded = isLoaded
  }

  setError (status: boolean): void {
    this.hasError = status
  }
}

export default UiStore
