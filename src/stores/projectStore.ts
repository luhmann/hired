import { observable, action, computed } from 'mobx'

import RootStore from './rootStore'

class ProjectStore {
  @observable projects: ProjectInterface[] = []

  private rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action
  setProjects(projects: ProjectInterface[]) {
    this.projects = projects
  }

  @action
  add(id: string, name: string, rate: number, description: string = '') {
    const project = {
      id,
      name,
      rate,
      description
    }

    this.projects[id] = project
  }

  @computed get currentProject() {
    return this.projects.filter((item) => (item.id === this.rootStore.uiStore.currentView.projectId))[0]
  }

}

export interface ProjectInterface {
  id: string,
  name: string,
  rate: number,
  description: string
}

export default ProjectStore
