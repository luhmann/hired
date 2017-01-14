import { observable, action } from 'mobx';

import { EntryStore } from './entry.store';

class EntryListStore {
  @observable entries: EntryStore[] = [];
  @observable active: EntryStore|null = null;

  @action
  addEntry(entry: EntryStore) {
    this.entries.unshift(entry);
  }

  @action
  startNewEntry() {
    if(!this.active) {
      let entry = new EntryStore();
      this.active = entry;
      this.addEntry(entry);
      entry.startTimer();
    }
  }

  @action
  stopCurrentTimer() {
    if(this.active) {
      this.active.stopTimer();
      this.active = null;
    }
  }
}

const entryListStore = new EntryListStore();

export default entryListStore;

export { EntryListStore };
