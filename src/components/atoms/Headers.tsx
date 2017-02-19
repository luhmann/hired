import styled from 'styled-components'

import { color, standardHPadding } from '../../styles/style-utils'

export const Header = styled.header`
  background-color: ${color.whiteSmoke};
  border-bottom: 1px solid ${ color.silver };
  height: 48px;
  left: 0;
  margin-bottom: 16px;
  position: sticky;
  top: 0;
`

export const DistributedHeader = styled(Header) `
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 ${ standardHPadding};
`

export const HeaderTitle = styled.div`
  font-weight: bold;
`
