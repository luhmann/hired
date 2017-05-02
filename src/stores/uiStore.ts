import { observable, action } from 'mobx'

interface CurrentViewInterface {
  name: string,
  projectId?: string
}

const VIEW_NAMES = {
  projectList: 'PROJECT_LIST',
  projectOverview: 'PROJECT_OVERVIEW',
  projectNew: 'PROJECT_NEW'
}

class UiStore {
  @observable isLoaded: boolean = false
  @observable hasError: boolean = false
  @observable currentView: CurrentViewInterface = {
    name: VIEW_NAMES.projectList
  }

  @action
  showProjectList(): void {
    this.currentView = {
      name: VIEW_NAMES.projectList
    }
  }

  @action
  showProject(projectId: string): void {
    this.currentView = {
      name: VIEW_NAMES.projectOverview,
      projectId
    }
  }

  @action
  showNewProject(): void {
    this.currentView = {
      name: VIEW_NAMES.projectNew
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
export { VIEW_NAMES }
