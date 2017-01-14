import * as React from 'react';
import { observer } from 'mobx-react';
import entryListStore from '../stores/entryList.store';

@observer
class ClockIn extends React.Component<{}, {}> {
  render() {
    return(
      <button onClick={ (!entryListStore.active) ? this.startEntry : this.stopEntry }>
        {`Clock ${(entryListStore.active ? 'Out' : 'In')}`}
       </button>
    );
  }

  startEntry() {
    entryListStore.startNewEntry();
  }

  stopEntry() {
    entryListStore.stopCurrentTimer()
  }
}

export default ClockIn;
