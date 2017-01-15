import * as React from 'react';
import './App.css';
import DevTools from 'mobx-react-devtools';

import EntryList from './components/EntryList.component';
import ClockIn from './components/ClockIn.component';
import entryListStore from './stores/entryList.store';

class App extends React.Component<null, null> {
  render() {
    return (
      <div className="App">
        <ClockIn />
        <EntryList entryList={entryListStore} />
        <DevTools />
      </div>
    );
  }
}

export default App;
