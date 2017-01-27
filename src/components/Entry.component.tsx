import * as React from 'react'
import { observer } from 'mobx-react'
import * as moment from 'moment'
import styled from 'styled-components'

import { formatDuration } from '../lib/format-duration'
import { gridCell, color } from '../styles/style-utils'

const Row = styled.div`
  border-top: 1px solid #f3f3f3
  padding: 6px 0
`

const Root = styled.div`
  display: flex
`

const Day = styled.div`
  ${ gridCell(8) }
`

const Total = styled.div`
  ${ gridCell(4) }
`

interface TimeProps {
  begin?: Boolean
  end?: Boolean
}

const Time = styled.div`
  ${ gridCell(2) }
  ${ (props: TimeProps) => props.begin ? `color: ${color('darkBlue')}` : ''}
  ${ (props: TimeProps) => props.end ? `color: ${color('red')}` : ''}
`

const Duration = styled.div`
  ${ gridCell(8) }
  color: ${color('darkBlue')}
  text-align: right
`

interface EntryProps {
  className?: string
  start: Date
  end: Date
  duration: number
}

const Entry = observer(({start, end, duration}: EntryProps) => (
    <Row>
        <Root>
            <Day>
                {moment(start).format('dd. DD. MMMM YYYY')}
            </Day>
            <Total>{/* total will live here*/}</Total>
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
