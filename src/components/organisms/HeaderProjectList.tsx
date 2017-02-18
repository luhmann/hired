import * as React from 'react'

import { ROUTE_NAMES } from '../../lib/router'

import { Link } from '../atoms/Links'
import { Header } from '../atoms/Headers'
import PlusIcon from '../../assets/Plus'



const ProjectListHeader = () => (
  <Header>
    <Link routeName={ROUTE_NAMES.projectNew}>
     <PlusIcon />
    </Link>
  </Header>
)

export default ProjectListHeader
