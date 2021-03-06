import * as React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { cells, color, shadow } from '../../styles/style-utils'
import { Button } from '../atoms/Buttons'
import { standardHPadding } from '../../styles/style-utils'

export interface ClockInProps {
  className?: string
  running: boolean,
  startEntry(): void,
  stopEntry(): void
}

const Root = styled.div`
  background-color: ${color.gray.g_50};
  padding: 0 ${standardHPadding};
  margin-bottom: ${cells(3)}
  width: 100%;
`

const ClockInButton = styled(Button)`
  box-shadow: ${shadow.medium};
  text-transform: uppercase;
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
      <Root>
        <ClockInButton
          success={(!this.props.running)}
          error={(!!this.props.running)}
          onClick={(!this.props.running) ? this.startEntry : this.stopEntry}
          data-t-target="ClockInButton"
        >
          {`Clock ${(this.props.running ? 'Out' : 'In')}`}
        </ClockInButton>
      </Root>
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
