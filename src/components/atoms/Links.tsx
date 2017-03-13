import { Link as RouterLink } from 'react-router5'
import styled from 'styled-components'

import { color } from '../../styles/style-utils'

export const ButtonLink = styled(RouterLink)`
  color: ${color.black};
  line-height: 0;
  text-decoration: none
`
