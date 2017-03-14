import styled from 'styled-components'

import { center, cells, color, fontSizes, standardHPadding } from '../../styles/style-utils'

export const Header = styled.header`
  background-color: ${color.whiteSmoke};
  border-bottom: 1px solid ${ color.silver };
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
  ${ center }
  font-size: ${fontSizes.standard};
  font-weight: bold;
  margin: 0;
`
