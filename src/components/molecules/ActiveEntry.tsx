import * as React from 'react'
import { observer } from 'mobx-react'
import * as moment from 'moment'
import styled from 'styled-components'

import { formatCurrency } from '../../lib/currency'
import { formatDuration } from '../../lib/dateTime'

import { color } from '../../styles/style-utils'
import { Row } from '../atoms/Containers'
import { Time } from '../atoms/Text'
import { Root as EntryRoot, Container, Total, Duration } from './Entry'
import FinishInfo from './FinishInfo'

const Root = styled(EntryRoot)`
  border-top: 1px solid ${color.gray.g_300};
  background-color: ${color.gray.g_50};
  border-bottom: 1px solid ${color.gray.g_300};
`

const StyledFinishInfo = styled(FinishInfo)`
  grid-column: col / span 4;
`

export interface ActiveEntryProps {
  className?: string
  start: Date
  duration: number
  standardHours: number
  total: number
}

const Entry = observer(({ start, duration, standardHours, total }: ActiveEntryProps) => (
  <Root>
    <Row contentCells={4}>
      <Container>
        <StyledFinishInfo startTime={start} workHours={standardHours} />
        <Total>{formatCurrency(total)}</Total>
        <Time begin>
          {moment(start).format('HH:mm')}
        </Time>
        <Duration>
          {formatDuration(duration)}
        </Duration>
      </Container>
    </Row>
  </Root>
))

export default Entry
