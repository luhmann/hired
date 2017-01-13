import * as React from 'react'
import Timer from './components/Timer'
import timerStore from './stores/timer.store'

import './App.css';

class App extends React.Component<null, null> {
  render() {
    return (
      <div className="App">
        <Timer timerStore={timerStore} />
      </div>
    );
  }
}

export default App;
