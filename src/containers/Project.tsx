import * as React from 'react'
import { observer, inject } from 'mobx-react'

import RootStore from '../stores/rootStore'

import ClockIn from '../components/molecules/ClockIn'
import EntryList from '../components/molecules/EntryList'
import Error from '../components/Error'
import HeaderEntriesList from '../components/organisms/HeaderEntriesList'

interface ProjectProps {
  rootStore?: RootStore
}

@inject('rootStore')
@observer
class Project extends React.Component<ProjectProps, {}> {
  render() {
    if (!this.props.rootStore || !this.props.rootStore.uiStore.currentView.projectId) {
      return <Error />
    }

    return (
      <div>
        <HeaderEntriesList
          project={
            this.props.rootStore.projectListStore.getById(this.props.rootStore.uiStore.currentView.projectId).name
          }
        />
        <ClockIn
          running={
            !!this.props.rootStore.entryListStore.active &&
            this.props.rootStore.entryListStore.active.projectId === this.props.rootStore.uiStore.currentView.projectId
          }
          startEntry={this.props.rootStore.entryListStore.startNewEntry}
          stopEntry={this.props.rootStore.entryListStore.stopCurrentTimer}
        />
        <EntryList
          entryList={this.props.rootStore.entryListStore}
          projectId={this.props.rootStore.uiStore.currentView.projectId}
        />
      </div>
    )
  }
}


export default Project
