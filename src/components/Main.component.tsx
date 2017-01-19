import * as React from 'react';
import { observer } from 'mobx-react';
import { IPromiseBasedObservable } from 'mobx-utils';

import ClockIn from './ClockIn.component';
import EntryList from './EntryList.component';
import Bootstrap from './Bootstrap.component';
import { EntryListStore } from '../stores/entryList.store';

interface MainProps {
    storedEntries: IPromiseBasedObservable<{}>;
}

@observer
class Main extends React.Component<MainProps, {}> {
  render() {
    return this.props.storedEntries.case({
        pending: () => <Bootstrap />,
        rejected: (error: any) => {
          return (<div>Error… ${error}</div>);
        },
        fulfilled: (snapshot: any) => {
          const entryListStore = new EntryListStore(snapshot.val());
          return (
             <div>
                <ClockIn entryListStore={entryListStore} />
                <hr />
                <EntryList entryList={entryListStore} />
              </div>
          );
        }
    });
  }
}

export default Main;
