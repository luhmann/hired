import * as React from 'react'
import styled from 'styled-components'

import { cells } from '../../styles/style-utils'

import { Fieldset, Label, TextInput} from '../atoms/Forms'

const IndentedTextInput = styled(TextInput)`
  padding-right: ${ cells(1) }
`

interface InputTextWithLabelProps {
  id: string
  label: string
  placeholder: string
}

const InputTextWithLabel = ({id, label, placeholder}: InputTextWithLabelProps) => (
  <Fieldset>
    <Label htmlFor={id}>{label}</Label>
    <IndentedTextInput id={id} type="text" placeholder={placeholder} />
  </Fieldset>
)

export default InputTextWithLabel
