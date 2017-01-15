import * as React from 'react';
import './App.css';
import DevTools from 'mobx-react-devtools';
import { fromPromise } from 'mobx-utils';


import Main from './components/Main.component';
import { Fb } from './storage/firebase';

class App extends React.Component<null, null> {
  render() {
    let storedEntries = fromPromise(Fb.entries.once('value'))
    return (
      <div className="App">
        <Main storedEntries={storedEntries} />
        <DevTools />
      </div>
    );
  }
}

export default App;
