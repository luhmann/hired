import * as React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { translate } from '../../lib/i18n'

import EntryStore from '../../stores/entryStore'
import { Entry, EmptyList } from '../molecules/'

export interface EntryListProps {
  entryList: EntryStore[]
}

const Root = styled.section`
  overflow: auto;
`

@observer
class EntryList extends React.Component<EntryListProps, {}> {
  render() {
    let content: JSX.Element[] | JSX.Element | null = null

    if (this.props.entryList.length) {
      content = this.props.entryList
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
      content = <EmptyList text={translate('entryList.empty')}/>
    }

    return (
      <Root>{content}</Root>
    )
  }
}

export default EntryList
