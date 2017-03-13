import { Link as RouterLink } from 'react-router5'
import styled from 'styled-components'

import { color } from '../../styles/style-utils'

const BaseLink = styled(RouterLink)`
  color: ${color.black};
  text-decoration: none;
`

export const ButtonLink = styled(BaseLink)`
  color: ${color.black};
  line-height: 0;
  text-decoration: none
`

export const RowLink = styled(BaseLink)`
  display: flex;
  justify-content: space-between;
`
