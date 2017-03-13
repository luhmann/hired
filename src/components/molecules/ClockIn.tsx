import * as React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { Button } from '../atoms/'
import { standardHPadding } from '../../styles/style-utils'

interface ClockInProps {
  className?: string
  running: boolean,
  startEntry: Function,
  stopEntry: Function
}

const ClockInButton = styled(Button)`
  margin: 0 ${standardHPadding};
  width: calc(100vw - 2*${standardHPadding});
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
        success={(!this.props.running)}
        error={(!!this.props.running)}
        onClick={(!this.props.running) ? this.startEntry : this.stopEntry}
      >
        {`Clock ${(this.props.running ? 'Out' : 'In')}`}
      </ClockInButton>
    )
  }

  startEntry() {
    this.props.startEntry()
  }

  stopEntry() {
    this.props.stopEntry()
  }
}

export default ClockIn
