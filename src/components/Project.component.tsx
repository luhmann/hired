import * as React from 'react'
import { observer } from 'mobx-react'
import { IPromiseBasedObservable } from 'mobx-utils'

import ClockIn from './ClockIn.component'
import EntryList from './EntryList.component'
import Bootstrap from './Bootstrap.component'
import { EntryListStore } from '../stores/entryListStore'

interface MainProps {
    storedEntries: IPromiseBasedObservable<{}>
}

@observer
class Project extends React.Component<MainProps, {}> {
  render() {
    return this.props.storedEntries.case({
        pending: () => <Bootstrap />,
        rejected: (error: Object) => {
          return (<div>Error… ${error}</div>)
        },
        fulfilled: (snapshot: { val: Function }) => {
          const entryListStore = new EntryListStore(snapshot.val())
          return (
             <div>
                <ClockIn entryListStore={entryListStore} />
                <EntryList entryList={entryListStore} />
              </div>
          )
        }
    })
  }
}

export default Project
