import * as React from 'react';
import { observer } from 'mobx-react';

import { EntryListStore } from '../stores/entryList.store';
import { EntryStore } from '../stores/entry.store';
import Entry from './Entry.component';

interface EntryListProps {
  entryList: EntryListStore;
}

@observer
class EntryList extends React.Component<EntryListProps, {}> {
  render() {
    return (
      <div className="grid">
        {
          this.props.entryList.entries.map((entry: EntryStore, index: number) => (
            <Entry key={index} start={entry.startTime} end={entry.endTime} duration={entry.duration} />
          ))
        }
      </div>
    );
  }
}

export default EntryList;
