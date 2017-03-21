import { observable, action, computed, reaction } from 'mobx'
import { sortBy } from 'lodash'
import * as uuid from 'uuid'

import RootStore from './rootStore'
import { EntryStore } from './entryStore'

class EntryListStore {
  @observable entries: EntryStore[] = []
  @observable active: EntryStore | null = null

  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    this.setupSync()
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
      id: uuid.v4(),
      projectId: this.rootStore.projectListStore.currentProject.id,
      rate: this.rootStore.projectListStore.currentProject.standardRate
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

  getFinishedEntriesForProject(projectId: string): EntryStore[] {
    return this.getEntriesForProject(projectId).filter((entry: EntryStore) => (!entry.running))
  }

  @computed get toStorage() {
    return this.entries.reduce(
      (map, entry) => (
        Object.assign({}, map, { [entry.id]: entry.toStorage })
      ),
      {}
    )
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

  private setupSync(): void {
    reaction(
      () => this.toStorage,
      (entries) => {
        if (entries) {
          this.rootStore.repository.entries(this.rootStore.userStore.uid).set(entries)
        }
      }
    )
  }
}

export default EntryListStore
