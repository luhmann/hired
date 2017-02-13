import { observable, action, computed } from 'mobx'

import RootStore from './rootStore'
import ProjectStore, { ProjectInterface } from './projectStore'

class ProjectListStore {
  @observable projects: ProjectStore[] = []

  private rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action
  hydrate(projects: ProjectInterface[]) {
    this.projects = projects.map((project) => {
      return new ProjectStore(this.rootStore, project.id, project.name, project.standardRate, project.description)
    })
  }

  @action
  add(id: string, name: string, standardRate: number, description: string = '') {
    this.projects[id] = new ProjectStore(this.rootStore, id, name, standardRate, description)
  }

  @computed get currentProject() {
    return this.projects.filter((item) => (item.id === this.rootStore.uiStore.currentView.projectId))[0]
  }

}

export default ProjectListStore
