import styled from 'styled-components'
import { color } from '../../styles/style-utils'

export const Duration = styled.div`
  color: ${color.indigo};
  text-align: right;
`

export const Total = styled.div`
  color: ${color.green.g_400}
  text-align: right;
`

export interface TimeProps {
  begin?: Boolean
  end?: Boolean
}

export const Time = styled.div`
  ${ (props: TimeProps) => props.begin ? `color: ${color.indigo};` : ''}
  ${ (props: TimeProps) => props.end ? `color: ${color.red.g_900};` : ''}
`
