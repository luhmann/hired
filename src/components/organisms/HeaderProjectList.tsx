import * as React from 'react'
import styled from 'styled-components'

import { ROUTE_NAMES } from '../../lib/router'

import { cells } from '../../styles/style-utils'
import { ButtonLink } from '../atoms/Links'
import { DistributedHeader, HeaderTitle } from '../atoms/Headers'
import PlusIcon from '../../assets/icons/Plus'

const AddLink = styled(PlusIcon)`
  display: flex;
  align-items: center;
  height: ${cells(6)};
  padding: ${cells(1.5)} ${cells(1.5)} ${cells(2)} 0;
  width: ${cells(5)};
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
