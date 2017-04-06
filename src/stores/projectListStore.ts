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
      return new ProjectStore(
        this.rootStore,
        project.id,
        project.name,
        project.standardRate,
        project.description,
        project.standardHours
      )
    })
  }

  @action
  add(
    name: string,
    standardRate: number,
    description: string = '',
    id: string = uuid.v4(),
    standardHours: number = 8
  ) {
    this.projects = [...this.projects, new ProjectStore(
        this.rootStore,
        id,
        name,
        standardRate,
        description,
        standardHours
      )
    ]
  }

  @computed get currentProject() {
    return this.projects.filter((item) => (item.id === this.rootStore.uiStore.currentView.projectId))[0]
  }

  hasProject(id: string): Boolean {
    return !!this.projects.filter((item) => (item.id === id)).length
  }

  getById(id: string): ProjectStore {
    return this.projects.filter((item) => (item.id === id))[0]
  }

  @computed get toStorage() {
    return this.projects.reduce(
      (map, entry) => (
        Object.assign({}, map, { [entry.id]: entry.toStorage })
      ),
      {}
    )
  }

  private setupSync() {
    reaction(
      () => this.toStorage,
      (projects) => {
        if (projects) {
          this.rootStore.repository.projects(this.rootStore.userStore.uid).set(projects)
        }
      }
    )
  }
}

export default ProjectListStore
