import { observable, computed } from 'mobx'

import RootStore from './rootStore'

class ProjectStore {
  id: string
  @observable name: string
  standardRate: number
  description: string
  rootStore: RootStore

  constructor(rootStore: RootStore, id: string, name: string, standardRate: number, description: string = '') {
    this.rootStore = rootStore
    this.id = id
    this.name = name
    this.standardRate = standardRate
    this.description = description
  }

  @computed get totalRevenue() {
    return this.rootStore.entryListStore.entries
      .filter((entry) => (entry.projectId === this.id))
      .reduce((previousValue, entry) => (previousValue + entry.total), 0)
  }

}

export interface ProjectInterface {
  id: string
  name: string
  standardRate: number
  description: string
  totalRevenue: number
}

export default ProjectStore
