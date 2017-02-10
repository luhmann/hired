import * as React from 'react'
import { observer, inject } from 'mobx-react'
// import { IPromiseBasedObservable } from 'mobx-utils'

import ClockIn from './ClockIn.component'
import EntryList from './EntryList.component'
// import EntryListStore from '../stores/entryListStore'

// interface MainProps {
//     storedEntries: IPromiseBasedObservable<{}>
// }

@inject('rootStore')
@observer
class Project extends React.Component<any, {}> {
  render() {
    return (
      <div>
        <ClockIn
          running={this.props.rootStore.entryListStore.active}
          startEntry={this.props.rootStore.entryListStore.startNewEntry}
          stopEntry={this.props.rootStore.entryListStore.stopCurrentTimer}
        />
        <EntryList entryList={this.props.rootStore.entryListStore} />
      </div>
    )
  }
}

export default Project
