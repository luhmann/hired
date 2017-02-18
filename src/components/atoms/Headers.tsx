import styled from 'styled-components'

import { color } from '../../styles/style-utils'

export const Header = styled.header`
  background-color: ${color('whiteSmoke')};
  border-bottom: 1px solid ${ color('darkMediumGray') };
  height: 48px;
  left: 0;
  margin-bottom: 16px;
  position: sticky;
  top: 0;
`

export const HeaderTitle = styled.div`
  font-weight: bold;
`
