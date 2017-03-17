import * as React from 'react'
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import EntryListStore from '../../stores/entryListStore'
import { EntryStore } from '../../stores/entryStore'
import Entry from '../molecules/Entry'

interface EntryListProps {
  entryList: EntryListStore,
  projectId: string
}

const Root = styled.section`
  overflow: auto;
`

@observer
class EntryList extends React.Component<EntryListProps, {}> {
  render() {
    return (
      <Root>
        <ReactCSSTransitionGroup
          transitionName="entry"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}
        >
          {
            this.props.entryList
              .getFinishedEntriesForProject(this.props.projectId)
              .map((entry: EntryStore, index: number) => (
                <Entry
                  key={entry.id}
                  start={entry.startTime}
                  end={entry.endTime}
                  duration={entry.duration}
                  total={entry.total}
                />
            ))
          }
        </ReactCSSTransitionGroup>
      </Root>
    )
  }
}

export default EntryList
