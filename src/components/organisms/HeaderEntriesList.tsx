import * as React from 'react'
import styled from 'styled-components'

import { VIEW_NAMES } from '../../stores/uiStore'

import { cells } from '../../styles/style-utils'
import { ButtonLink } from '../molecules/Links'
import { DistributedHeader, HeaderTitle } from '../atoms/Headers'
import BackIcon from '../../assets/icons/Back'

const BackLink = styled(BackIcon)`
  height: ${cells(5)};
  padding: ${cells(1)} 0;
  width: ${cells(2)};
`

export interface EntriesListHeaderProps {
  project: string
}

const EntriesListHeader = ({project}: EntriesListHeaderProps) => (
  <DistributedHeader>
    <ButtonLink routeName={VIEW_NAMES.projectList}>
      <BackLink />
    </ButtonLink>
    <HeaderTitle>{project}</HeaderTitle>
    <div>&nbsp;</div>
  </DistributedHeader>
)

export default EntriesListHeader
