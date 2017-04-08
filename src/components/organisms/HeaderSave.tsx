import * as React from 'react'
import styled from 'styled-components'

import { TextButton } from '../atoms/Buttons'
import { DistributedHeader, HeaderTitle } from '../atoms/Headers'

interface HeaderSaveProps {
  title: string
  saveHandler: React.EventHandler<any>
  cancelHandler: React.EventHandler<any>
}

const CancelButton = styled(TextButton)`
  text-align: left;
`

const SaveButton = styled(TextButton)`
  text-align: right;
`

const HeaderSave = ({ title, cancelHandler, saveHandler}: HeaderSaveProps) => (
  <DistributedHeader>
    <CancelButton text="Cancel" clickHandler={cancelHandler} data-t-target="CancelButton"/>
    <HeaderTitle>{title}</HeaderTitle>
    <SaveButton text="Save" clickHandler={saveHandler} data-t-target="SaveButton" />
  </DistributedHeader>
)

export default HeaderSave
