import { observable, computed } from 'mobx'

import EntryListStore from './entryListStore'

class ProjectStore {
  readonly id: string
  @observable name: string
  standardRate: number
  description: string
  standardHours: number
  entryListStore: EntryListStore

  constructor(
    entryListStore: EntryListStore,
    id: string,
    name: string,
    standardRate: number,
    description: string = '',
    standardHours: number = 8
  ) {
    this.entryListStore = entryListStore
    this.id = id
    this.name = name
    this.standardRate = standardRate
    this.description = description
    this.standardHours = standardHours
  }

  @computed get totalRevenue() {
    return this.entryListStore
      .getEntriesForProject(this.id)
      .reduce((previousValue, entry) => (previousValue + entry.total), 0)
  }

  @computed get toStorage() {
    return {
      id: this.id,
      name: this.name,
      standardRate: this.standardRate,
      standardHours: this.standardHours,
      description: this.description
    }
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
