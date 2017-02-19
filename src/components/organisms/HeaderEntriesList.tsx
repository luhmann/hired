import * as React from 'react'

import { ROUTE_NAMES } from '../../lib/router'

import { Link } from '../atoms/Links'
import { DistributedHeader, HeaderTitle } from '../atoms/Headers'
import BackIcon from '../../assets/icons/Back'

interface EntriesListHeaderProps {
  project: string
}

const EntriesListHeader = ({project}: EntriesListHeaderProps) => (
  <DistributedHeader>
    <Link routeName={ROUTE_NAMES.projectList}>
      <BackIcon />
    </Link>
    <HeaderTitle>{project}</HeaderTitle>
    <div>&nbsp;</div>
  </DistributedHeader>
)

export default EntriesListHeader
