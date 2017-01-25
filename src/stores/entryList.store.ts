import { observable, action } from 'mobx'
import { sortBy } from 'lodash'

import { EntryStore } from './entry.store'

class EntryListStore {
  @observable entries: EntryStore[] = []
  @observable active: EntryStore | null = null

  constructor(entries = {}) {
    if (entries) {
      this.hydrate(entries)
    }
  }

  @action
  addEntry(entry: EntryStore) {
    this.entries.unshift(entry)
  }

  @action
  startNewEntry() {
    if (!this.active) {
      let entry = new EntryStore()
      this.active = entry
      this.addEntry(entry)
      entry.startTimer()
    }
  }

  @action
  stopCurrentTimer() {
    if (this.active) {
      this.active.stopTimer()
      this.active = null
    }
  }

  @action
  private setEntries(entries: any[]) {
    this.entries = entries
  }

  @action
  private checkFirstActive() {
    console.log('in checkFirstActive', this.entries)
    if (this.entries[0].running) {
      this.active = this.entries[0]
    }
  }

  private hydrate(storageObjects: Object) {
    let unsortedEntries = []

    for (let id in storageObjects) {
      unsortedEntries.push(EntryStore.fromStorage(id, storageObjects[id]))
    }

    let sortedEntries = sortBy(unsortedEntries, ['startTime']).reverse()

    this.setEntries(sortedEntries)
    this.checkFirstActive()
  }
}

export { EntryListStore }
