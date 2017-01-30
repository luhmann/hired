import * as React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { EntryListStore } from '../stores/entryListStore'
import { Button } from './atoms/'

interface ClockInProps {
  className?: string
  entryListStore: EntryListStore
}

const ClockInButton = styled(Button)`
  height: 46px;
  width: 100%;
`

@observer
class ClockIn extends React.Component<ClockInProps, {}> {
  constructor(props: ClockInProps) {
    super(props)

    this.startEntry = this.startEntry.bind(this)
    this.stopEntry = this.stopEntry.bind(this)
  }

  render() {
    return(
      <ClockInButton
        success={(!this.props.entryListStore.active)}
        error={(!!this.props.entryListStore.active)}
        onClick={(!this.props.entryListStore.active) ? this.startEntry : this.stopEntry}
      >
        {`Clock ${(this.props.entryListStore.active ? 'Out' : 'In')}`}
      </ClockInButton>
    )
  }

  startEntry() {
    this.props.entryListStore.startNewEntry()
  }

  stopEntry() {
    this.props.entryListStore.stopCurrentTimer()
  }
}

export default ClockIn
