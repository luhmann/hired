import * as React from 'react'
import styled from 'styled-components'

import { standardHPadding } from '../styles/style-utils'

import { Link } from './atoms/Links'
import PlusIcon from '../assets/Plus'
import { ROUTE_NAMES } from '../lib/router'

const Header = styled.header`
  background-color: #f3f3f3;
  left: 0;
  position: sticky;
  padding-right: ${standardHPadding}
  top: 0;
`

const ProjectListHeader = () => (
  <Header>
    <Link routeName={ROUTE_NAMES.projectNew}>
     <PlusIcon />
    </Link>
  </Header>
)

export default ProjectListHeader
