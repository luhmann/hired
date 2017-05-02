import * as React from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'

import RootStore from '../stores/rootStore'

import { cells, color, maxWidth, maxWidthContainer} from '../styles/style-utils'
import { ActiveEntry, ClockIn } from '../components/molecules/'
import { EntryList } from '../components/organisms/'
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

export interface ProjectProps {
  rootStore?: RootStore
  id: string
}

@inject('rootStore')
@observer
class Project extends React.Component<ProjectProps, {}> {
  render() {
    if (!this.props.rootStore || !this.props.rootStore.projectListStore.hasProject(this.props.id)) {
      // tslint:disable-next-line
      this.props.rootStore && this.props.rootStore.uiStore.setError(true)
      return null
    }

    const hasRunningTimer = !!this.props.rootStore.entryListStore.active &&
      this.props.rootStore.entryListStore.active.projectId === this.props.id

    const activeEntry = (hasRunningTimer) ? this.props.rootStore.entryListStore.active : null

    const entryListForProject = this.props.rootStore.entryListStore
      .getEntriesForProject(this.props.id)

    return (
      <Root hasRunningTimer={hasRunningTimer}>
        <HeaderEntriesList
          project={
            this.props.rootStore.projectListStore.getById(this.props.id).name
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
          entryList={entryListForProject}
        />
      </Root>
    )
  }
}

export default Project
