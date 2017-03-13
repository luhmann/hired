import * as React from 'react'

import { ROUTE_NAMES } from '../../lib/router'

import { ButtonLink } from '../atoms/Links'
import { DistributedHeader, HeaderTitle } from '../atoms/Headers'
import PlusIcon from '../../assets/icons/Plus'


const ProjectListHeader = () => (
  <DistributedHeader>
    <ButtonLink routeName={ROUTE_NAMES.projectNew}>
     <PlusIcon />
    </ButtonLink>
    <HeaderTitle>Projects</HeaderTitle>
    <div>&nbsp;</div>
  </DistributedHeader>
)

export default ProjectListHeader
