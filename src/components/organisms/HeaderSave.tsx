import * as React from 'react'
import styled from 'styled-components'

import { standardHPadding } from '../../styles/style-utils'

import { TextButton } from '../atoms/Buttons'
import { Header, HeaderTitle } from '../atoms/Headers'

const DistributedHeader = styled(Header)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 ${ standardHPadding };
`

interface HeaderSaveProps {
  title: string
}

const HeaderSave = ({title}: HeaderSaveProps) => (
  <DistributedHeader>
    <TextButton text="Cancel" />
    <HeaderTitle>{title}</HeaderTitle>
    <TextButton text="Save" />
  </DistributedHeader>
)

export default HeaderSave
