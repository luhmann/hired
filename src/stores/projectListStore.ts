import { observable, action, computed, reaction } from 'mobx'
import * as uuid from 'uuid'

import RootStore from './rootStore'
import ProjectStore, { ProjectInterface } from './projectStore'

class ProjectListStore {
  @observable projects: ProjectStore[] = []

  private rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    this.setupSync()
  }

  @action
  hydrate(projects: ProjectInterface[]) {
    this.projects = projects.map((project) => {
      return new ProjectStore(this.rootStore, project.id, project.name, project.standardRate, project.description)
    })
  }

  @action
  add(name: string, standardRate: number, description: string = '', id: string = uuid.v4()) {
    this.projects = [...this.projects, new ProjectStore(this.rootStore, id, name, standardRate, description)]
  }

  @computed get currentProject() {
    return this.projects.filter((item) => (item.id === this.rootStore.uiStore.currentView.projectId))[0]
  }

  getById(id: string): ProjectStore {
    return this.projects.filter((item) => (item.id === id))[0]
  }

  private setupSync() {
    reaction(
      () => this.projects.map((project) => project.toStorage),
      (projects) => {
        if (projects) {
          this.rootStore.repository.projects(this.rootStore.userStore.uid).set(projects)
        }
      }
    )
  }

}

export default ProjectListStore
