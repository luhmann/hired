import { observable, action } from 'mobx';
import { sortBy } from 'lodash';

import { EntryStore } from './entry.store';
import { Fb } from '../storage/firebase';

class EntryListStore {
  @observable entries: EntryStore[] = [];
  @observable active: EntryStore|null = null;

  constructor() {
    Fb.entries.once('value').then((snapshot) => {
      const firebaseEntries = snapshot.val();
      if (firebaseEntries) {
        let unsortedEntries = []

        for (let id in firebaseEntries) {
          unsortedEntries.push(EntryStore.fromStorage(id, firebaseEntries[id]))
        }

        let sortedEntries = sortBy(unsortedEntries, ['startTime']).reverse();
        console.log(snapshot.val(), sortedEntries);
        this.setEntries(sortedEntries);
        this.isFirstActive();
      }
    });
  }

  @action
  addEntry(entry: EntryStore) {
    this.entries.unshift(entry);
  }

  @action
  startNewEntry() {
    if (!this.active) {
      let entry = new EntryStore();
      this.active = entry;
      this.addEntry(entry);
      entry.startTimer();
    }
  }

  @action
  stopCurrentTimer() {
    if (this.active) {
      this.active.stopTimer();
      this.active = null;
    }
  }

  @action
  private setEntries(entries: any[]) {
    this.entries = entries;
  }

  @action
  private isFirstActive() {
    if (this.entries[0].running) {
      this.active = this.entries[0];
    }
  }
}

const entryListStore = new EntryListStore();

export default entryListStore;

export { EntryListStore };
