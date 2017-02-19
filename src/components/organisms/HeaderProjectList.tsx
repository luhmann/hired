import * as React from 'react'

import { ROUTE_NAMES } from '../../lib/router'

import { Link } from '../atoms/Links'
import { DistributedHeader, HeaderTitle } from '../atoms/Headers'
import PlusIcon from '../../assets/icons/Plus'



const ProjectListHeader = () => (
  <DistributedHeader>
    <Link routeName={ROUTE_NAMES.projectNew}>
     <PlusIcon />
    </Link>
    <HeaderTitle>Projects</HeaderTitle>
    <div>&nbsp;</div>
  </DistributedHeader>
)

export default ProjectListHeader
