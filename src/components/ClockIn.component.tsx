import * as React from 'react';
import { observer } from 'mobx-react';
import { EntryListStore } from '../stores/entryList.store';

interface ClockInProps {
  entryListStore: EntryListStore;
}

@observer
class ClockIn extends React.Component<ClockInProps, {}> {
  constructor(props: ClockInProps) {
    super(props)

    this.startEntry = this.startEntry.bind(this);
    this.stopEntry = this.stopEntry.bind(this);
  }

  render() {
    return(
      <button onClick={(!this.props.entryListStore.active) ? this.startEntry : this.stopEntry}>
        {`Clock ${(this.props.entryListStore.active ? 'Out' : 'In')}`}
       </button>
    );
  }

  startEntry() {
    this.props.entryListStore.startNewEntry();
  }

  stopEntry() {
    this.props.entryListStore.stopCurrentTimer();
  }
}

export default ClockIn;
