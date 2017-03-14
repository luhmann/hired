import { Link as RouterLink } from 'react-router5'
import styled from 'styled-components'

import { color } from '../../styles/style-utils'

const BaseLink = styled(RouterLink)`
  color: ${color.black};
  text-decoration: none;
`

export const ButtonLink = styled(BaseLink)`
  align-items: center;
  color: ${color.black};
  display: flex;
  text-decoration: none
`

export const RowLink = styled(BaseLink)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
