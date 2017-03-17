import * as React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { cells, color } from '../../styles/style-utils'
import ArrowIcon from '../../assets/icons/Arrow'
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

const Empty = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: -${cells(9)};
  justify-content: center;
`

const EmptyText = styled.div``

const StyledArrowIcon = styled(ArrowIcon)`
  transform: rotate(-120deg) scaleY(-1);
  margin-bottom: ${cells(1)};
  width: ${cells(14)};

  .outline {
    fill: ${color.gray.g_400}
  }
`

@observer
class EntryList extends React.Component<EntryListProps, {}> {
  render() {
    const entries = this.props.entryList.getEntriesForProject(this.props.projectId)

    let content = null
    if (entries.length) {
      content = entries
        .filter(entry => entry.endTime)
        .map((entry: EntryStore) => (
          <Entry
            key={entry.id}
            start={entry.startTime}
            end={entry.endTime}
            duration={entry.duration}
            total={entry.total}
          />
      ))
    } else {
      content = (
        <Empty>
          <StyledArrowIcon />
          <EmptyText>You have no entries yet.<br />Hit the big green button!</EmptyText>
        </Empty>
      )
    }

    return (
      <Root>{content}</Root>
    )
  }
}

export default EntryList
