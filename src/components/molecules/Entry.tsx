import * as React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { formatCurrency } from '../../lib/currency'
import { formatDate, formatDuration, formatTime } from '../../lib/dateTime'

import { cells, color, fontSizes } from '../../styles/style-utils'
import { Row } from '../atoms/Containers'
import { Duration as GlobalDuration, Time, Total as GlobalTotal } from '../atoms/Text'

export const Root = styled.div`
  background-color: ${color.white};
`

export const Container = styled.div`
  font-size: ${fontSizes.standard};
  display: grid;
  grid-template-columns: repeat(6, [col] 1fr);
  grid-column-gap: ${cells(1)};
  grid-row-gap: 3px;
  height: ${cells(2)};
`

export const Day = styled.div`
  grid-column: col / span 4;
`

export const Total = styled(GlobalTotal)`
  grid-column: col 5 / span 2;
`

export const Duration = styled(GlobalDuration)`
  grid-column: col 3 / span 4;
`

export interface EntryProps {
  className?: string
  start: Date
  end: Date
  duration: number
  total: number
}

const Entry = observer(({ start, end, duration, total }: EntryProps) => (
  <Root>
    <Row contentCells={4}>
      <Container>
        <Day>
          {formatDate(start)}
        </Day>
        <Total>{formatCurrency(total)}</Total>
        <Time begin>
          {formatTime(start)}
        </Time>
        <Time end>
          {(end) ? (formatTime(end)) : null}
        </Time>
        <Duration>
          {formatDuration(duration)}
        </Duration>
      </Container>
    </Row>
  </Root>
))

export default Entry
