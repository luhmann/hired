import * as React from 'react'
import styled from 'styled-components'

import { cells } from '../../styles/style-utils'

import { Fieldset, Label, TextInput } from '../atoms/Forms'

const Unit = styled.div`
  font-weight: bold;
  margin-left: ${ cells(1) };
  padding-right: ${ cells(1) };
  text-align: right;
`

export interface InputTextWithLabelProps {
  id: string
  label: string
  placeholder: string
  unit: string
  changeHandler: React.EventHandler<any>
}

const InputTextWithLabel = ({id, label, placeholder, unit, changeHandler}: InputTextWithLabelProps) => (
  <Fieldset>
    <Label htmlFor={id}>{label}</Label>
    <TextInput id={id} type="number" placeholder={placeholder} onChange={changeHandler} />
    <Unit>{unit}</Unit>
  </Fieldset>
)

export default InputTextWithLabel
