import styled from 'styled-components'

import { color, cells, standardHPadding } from '../../styles/style-utils'

export const Row = styled.div`
  border-bottom: 1px solid ${color.whiteSmoke};
  height: ${cells(6)};
  padding: ${cells(1)} ${standardHPadding};
`
export const Body = styled.main`
  padding: 0 ${standardHPadding};
`
