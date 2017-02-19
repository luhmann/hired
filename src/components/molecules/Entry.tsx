import * as React from 'react'
import { observer } from 'mobx-react'
import * as moment from 'moment'
import styled from 'styled-components'

import { formatCurrency } from '../../lib/format-currency'
import { formatDuration } from '../../lib/format-duration'
import { gridCell, color } from '../../styles/style-utils'

import { Row } from '../atoms/Containers'
import { Total as GlobalTotal } from '../atoms/Text'

const Root = styled.div`
  display: flex;
  margin-bottom: 3px;
`

const Day = styled.div`
  ${ gridCell(8) }
`

const Total = styled(GlobalTotal)`
  ${ gridCell(4) }
`

interface TimeProps {
  begin?: Boolean
  end?: Boolean
}

const Time = styled.div`
  ${ gridCell(2) }
  ${ (props: TimeProps) => props.begin ? `color: ${color.charcoral};` : ''}
  ${ (props: TimeProps) => props.end ? `color: ${color.deepChestnut};` : ''}
`

const Duration = styled.div`
  ${ gridCell(8) }
  color: ${color.charcoral};
  text-align: right;
`

interface EntryProps {
  className?: string
  start: Date
  end: Date
  duration: number
  total: number
}

const Entry = observer(({start, end, duration, total}: EntryProps) => (
    <Row>
        <Root>
            <Day>
                {moment(start).format('dd. DD. MMMM YYYY')}
            </Day>
            <Total>{formatCurrency(total)}</Total>
        </Root>
        <Root>
          <Time begin>
             {moment(start).format('HH:mm')}
          </Time>
          <Time end>
            {(end) ? (moment(end).format('HH:mm')) : null}
          </Time>
          <Duration>
            {formatDuration(duration)}
          </Duration>
        </Root>
    </Row>
))

export default Entry
