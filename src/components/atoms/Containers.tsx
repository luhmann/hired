import * as React from 'react'
import styled from 'styled-components'

import { color, cells, standardHPadding } from '../../styles/style-utils'

interface RowProps {
  className?: string
  contentCells?: number
}

const BaseRow: React.StatelessComponent<RowProps> = (props) =>
  <div className={props.className}>{props.children}</div>;

export const Row = styled(BaseRow)`
    border-bottom: 1px solid ${color.whiteSmoke};
    height: ${({contentCells = 2}) => cells(contentCells + 2)};
    padding: ${cells(1)} ${standardHPadding};
  `

export const Body = styled.main`
  padding: 0 ${standardHPadding};
`
