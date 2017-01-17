import * as React from 'react';
import './App.css';
import DevTools from 'mobx-react-devtools';
import { fromPromise } from 'mobx-utils';
import { observer } from 'mobx-react';


import Bootstrap from './components/Bootstrap.component'
import Main from './components/Main.component';
import { Fb } from './storage/firebase';

@observer
class App extends React.Component<{}, {}> {
  authPromise:any;

  componentWillMount() {
    this.authPromise = fromPromise(Fb.authenticate());
  }

  render() {
    return (
      <div className="App">
        {
          this.authPromise.case({
            pending: () => <Bootstrap />,
            rejected: (error: any) => <div>Something went horribly wrong</div>,
            fulfilled: () => {
              let storedEntries = fromPromise(Fb.entries.once('value'))
              return (<Main storedEntries={storedEntries} />)
            }
          })
        }
        <DevTools />
      </div>
     );
  }
}

export default App;
