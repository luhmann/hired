import { observable, action, computed } from 'mobx'
import { sortBy } from 'lodash'

import RootStore from './rootStore'
import { EntryStore } from './entryStore'

class EntryListStore {
  @observable entries: EntryStore[] = []
  @observable active: EntryStore | null = null

  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action
  addEntry(entry: EntryStore) {
    this.entries.unshift(entry)
  }

  @action.bound
  startNewEntry() {
    if (this.active) {
      this.stopCurrentTimer()
    }

    let entry = new EntryStore({
      projectId: this.rootStore.projectStore.currentProject.id,
      rate: this.rootStore.projectStore.currentProject.rate
    })
    this.active = entry
    this.addEntry(entry)
    entry.startTimer()
  }

  @action.bound
  stopCurrentTimer() {
    if (this.active) {
      this.active.stopTimer()
      this.active = null
    }
  }

  getEntriesForProject(projectId: string): EntryStore[] {
    return this.entries.filter((entry: EntryStore) => (entry.projectId === projectId))
  }

  @computed get toStorage() {
    return this.entries.map((entry) => entry.toStorage())
  }

  @action.bound
  hydrate(storageObjects: Object) {
    let unsortedEntries = []

    for (let id in storageObjects) {
      if (storageObjects.hasOwnProperty(id)) {
        unsortedEntries.push(EntryStore.fromStorage(id, storageObjects[id]))
      }
    }

    let sortedEntries = sortBy(unsortedEntries, ['startTime']).reverse()

    this.setEntries(sortedEntries)
    this.checkFirstActive()
  }

  @action.bound
  private setEntries(entries: EntryStore[]) {
    this.entries = entries
  }

  @action.bound
  private checkFirstActive() {
    if (this.entries[0].running) {
      this.active = this.entries[0]
    }
  }
}

export default EntryListStore
