import * as React from 'react';
import { observer } from 'mobx-react';
import { IPromiseBasedObservable } from 'mobx-utils';

import ClockIn from './ClockIn.component';
import EntryList from './EntryList.component';
import { EntryListStore } from '../stores/entryList.store';

interface MainProps {
    storedEntries: IPromiseBasedObservable<any>
}

@observer
class Main extends React.Component<MainProps, any> {
  render() {
    return this.props.storedEntries.case({
        pending: () => <div>Loading…</div>,
        rejected: (error: any) => {
          console.log('Error retrieving items', error);
          return (<div>Error…</div>);
        },
        fulfilled: (snapshot: any) => {
          const entryListStore = new EntryListStore(snapshot.val());
          return (
             <div>
                <ClockIn entryListStore={entryListStore} />
                <EntryList entryList={entryListStore} />
              </div>
          );
        }
    })
  }
}

export default Main;
