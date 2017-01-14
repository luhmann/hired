import { observable, action } from 'mobx';

import { EntryStore } from './entry.store';

class EntryListStore {
  @observable entries: EntryStore[] = [];

  @action
  pushEntry(entry: EntryStore) {
    this.entries.push(entry);
  }

  @action
  startNewEntry() {
    let entry = new EntryStore();
    this.pushEntry(entry);
    entry.startTimer();
  }
}

const entryListStore = new EntryListStore();

export default entryListStore;

export { EntryListStore };
