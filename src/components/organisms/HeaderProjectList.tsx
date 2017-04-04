import * as React from 'react'
import styled from 'styled-components'

import { ROUTE_NAMES } from '../../stores/routerStore'

import { cells } from '../../styles/style-utils'
import { ButtonLink } from '../molecules/Links'
import { DistributedHeader, HeaderTitle } from '../atoms/Headers'
import PlusIcon from '../../assets/icons/Plus'

const AddLink = styled(PlusIcon)`
  height: ${cells(6)};
  padding: ${cells(1.5)} 0 ${cells(1.5)};
  width: ${cells(4)};
`

const ProjectListHeader = () => (
  <DistributedHeader>
    <ButtonLink routeName={ROUTE_NAMES.projectNew}>
     <AddLink />
    </ButtonLink>
    <HeaderTitle>Projects</HeaderTitle>
  </DistributedHeader>
)

export default ProjectListHeader
