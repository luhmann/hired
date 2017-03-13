import styled from 'styled-components'

import { cells, color, standardHPadding } from '../../styles/style-utils'

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
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 ${standardHPadding};
`

export const HeaderTitle = styled.div`
  font-weight: bold;
`
