import * as React from 'react'
import styled from 'styled-components'

import { ROUTE_NAMES } from '../../lib/router'

import { cells } from '../../styles/style-utils'
import { ButtonLink } from '../atoms/Links'
import { DistributedHeader, HeaderTitle } from '../atoms/Headers'
import PlusIcon from '../../assets/icons/Plus'

const AddLink = styled(PlusIcon)`
  height: ${cells(5)};
  padding: ${cells(1)} ${cells(1)} ${cells(1)} 0;
  width: ${cells(5)};
`

const ProjectListHeader = () => (
  <DistributedHeader>
    <ButtonLink routeName={ROUTE_NAMES.projectNew}>
     <AddLink />
    </ButtonLink>
    <HeaderTitle>Projects</HeaderTitle>
    <div>&nbsp;</div>
  </DistributedHeader>
)

export default ProjectListHeader
