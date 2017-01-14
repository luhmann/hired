import * as React from 'react';
import entryListStore from '../stores/entryList.store';

class ClockIn extends React.Component<null, null> {
  render() {
    return(
      <button onClick={this.startEntry}>Clock In Now</button>
    );
  }

  startEntry() {
    entryListStore.startNewEntry();
  }
}

export default ClockIn;
