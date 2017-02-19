import * as React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import EntryListStore from '../../stores/entryListStore'
import { EntryStore } from '../../stores/entryStore'
import Entry from './Entry'

interface EntryListProps {
  entryList: EntryListStore,
  projectId: string
}

const Root = styled.div`
  margin-top: 20px;
`

@observer
class EntryList extends React.Component<EntryListProps, {}> {
  render() {
    return (
      <Root>
        {
          this.props.entryList.getEntriesForProject(this.props.projectId).map((entry: EntryStore, index: number) => (
            <Entry
              key={index}
              start={entry.startTime}
              end={entry.endTime}
              duration={entry.duration}
              total={entry.total}
            />
          ))
        }
      </Root>
    )
  }
}

export default EntryList
