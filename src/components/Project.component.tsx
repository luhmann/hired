import * as React from 'react'
import { observer } from 'mobx-react'

import ClockIn from './ClockIn.component'
import EntryList from './EntryList.component'

// import RootStore from '../stores/rootStore'

// interface ProjectProps {
//   projectId: string
//   rootStore: RootStore
// }

@observer
class Project extends React.Component<any, {}> {
  render() {
    return (
      <div>
        <ClockIn
          running={
            this.props.entryListStore.active && this.props.entryListStore.active.projectId === this.props.projectId
          }
          startEntry={this.props.entryListStore.startNewEntry}
          stopEntry={this.props.entryListStore.stopCurrentTimer}
        />
        <EntryList entryList={this.props.entryListStore} projectId={this.props.projectId} />
      </div>
    )
  }
}

export default Project
