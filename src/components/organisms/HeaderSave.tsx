import * as React from 'react'

import { TextButton } from '../atoms/Buttons'
import { DistributedHeader, HeaderTitle } from '../atoms/Headers'

interface HeaderSaveProps {
  title: string
  saveHandler: React.EventHandler<any>
  cancelHandler: React.EventHandler<any>
}

const HeaderSave = ({ title, cancelHandler, saveHandler}: HeaderSaveProps) => (
  <DistributedHeader>
    <TextButton text="Cancel" clickHandler={cancelHandler} />
    <HeaderTitle>{title}</HeaderTitle>
    <TextButton text="Save" clickHandler={saveHandler} />
  </DistributedHeader>
)

export default HeaderSave
