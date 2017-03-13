import * as React from 'react'
import styled from 'styled-components'

import { ROUTE_NAMES } from '../../lib/router'

import { cells } from '../../styles/style-utils'
import { ButtonLink } from '../atoms/Links'
import { DistributedHeader, HeaderTitle } from '../atoms/Headers'
import BackIcon from '../../assets/icons/Back'

const BackLink = styled(BackIcon)`
  height: ${cells(5)}
  width: ${cells(2)}
`

interface EntriesListHeaderProps {
  project: string
}

const EntriesListHeader = ({project}: EntriesListHeaderProps) => (
  <DistributedHeader>
    <ButtonLink routeName={ROUTE_NAMES.projectList}>
      <BackLink />
    </ButtonLink>
    <HeaderTitle>{project}</HeaderTitle>
    <div>&nbsp;</div>
  </DistributedHeader>
)

export default EntriesListHeader
