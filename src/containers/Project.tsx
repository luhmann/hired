import * as React from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'

import RootStore from '../stores/rootStore'

import { cells, color, maxWidth, maxWidthContainer} from '../styles/style-utils'
import ActiveEntry from '../components/molecules/ActiveEntry'
import ClockIn from '../components/molecules/ClockIn'
import EntryList from '../components/organisms/EntryList'
import Error from './Error'
import HeaderEntriesList from '../components/organisms/HeaderEntriesList'

const Root = styled.section`
  ${ maxWidthContainer() }
  background-color: ${color.gray.g_50}
  display: grid;
  height: 100vmax;
  grid-template-rows: ${cells(8)} ${cells(9)} 1fr;
  grid-template-columns: minmax(auto, ${maxWidth}); /* max-width for tracks */

  ${({hasRunningTimer}: {hasRunningTimer: boolean}) => (hasRunningTimer) ? `
    grid-template-rows: ${cells(8)} ${cells(9)} ${cells(6)} 1fr
  ` : ''}
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

    const hasRunningTimer = !!this.props.rootStore.entryListStore.active &&
      this.props.rootStore.entryListStore.active.projectId === this.props.rootStore.uiStore.currentView.projectId

    const activeEntry = (hasRunningTimer) ? this.props.rootStore.entryListStore.active : null

    return (
      <Root hasRunningTimer={hasRunningTimer}>
        <HeaderEntriesList
          project={
            this.props.rootStore.projectListStore.getById(this.props.rootStore.uiStore.currentView.projectId).name
          }
        />
        <ClockIn
          running={hasRunningTimer}
          startEntry={this.props.rootStore.entryListStore.startNewEntry}
          stopEntry={this.props.rootStore.entryListStore.stopCurrentTimer}
        />
        {activeEntry && (
          <ActiveEntry
            key={activeEntry.id}
            start={activeEntry.startTime}
            duration={activeEntry.duration}
            standardHours={this.props.rootStore.projectListStore.currentProject.standardHours}
            total={activeEntry.total}
          />
        )}
        <EntryList
          entryList={this.props.rootStore.entryListStore}
          projectId={this.props.rootStore.uiStore.currentView.projectId}
        />
      </Root>
    )
  }
}

export default Project
