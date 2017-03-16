import * as React from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'

import RootStore from '../stores/rootStore'

import { cells } from '../styles/style-utils'
import ClockIn from '../components/molecules/ClockIn'
import EntryList from '../components/molecules/EntryList'
import Error from '../components/Error'
import HeaderEntriesList from '../components/organisms/HeaderEntriesList'

const Root = styled.section`
  display: grid;
  height: 100vmax;
  grid-template-rows: ${cells(8)} ${cells(6)} 1fr;
`

const PositionedEntryList = styled(EntryList)`
  margin-top: ${ cells(3)};
  overflow: auto;
`

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
      <Root>
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
        <PositionedEntryList
          entryList={this.props.rootStore.entryListStore}
          projectId={this.props.rootStore.uiStore.currentView.projectId}
        />
      </Root>
    )
  }
}

export default Project
