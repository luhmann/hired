import styled from 'styled-components'
// import { ellipsis } from '../../styles/style-utils'

import { center, cells, color, fontSizes, shadow, standardHPadding } from '../../styles/style-utils'

export const Header = styled.header`
  background-color: ${color.gray.g_100};
  box-shadow: ${shadow.subtle};
  height: ${cells(6)};
  left: 0;
  margin-bottom: ${cells(2)};
  position: sticky;
  top: 0;
`

export const DistributedHeader = styled(Header)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 ${standardHPadding};
`

export const HeaderTitle = styled.h1`
  ${center}
  font-size: ${fontSizes.standard};
  font-weight: 900;
  margin: 0;
  white-space: nowrap;
`
