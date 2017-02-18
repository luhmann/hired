import styled from 'styled-components'
import { color, standardFontSize } from '../../styles/style-utils'

export const Fieldset = styled.div`
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  justify-content: space-between;
  height: 40px;
`
export const TextInput = styled.input`
  border: none;
  font-size: ${standardFontSize};
  margin: 0;
  padding: 0;
  flex-grow: 1;
  text-align: right;

  &:focus {
    color: ${ color('turquoiseSurf') };
    outline: none;
  };
`

export const Label = styled.label`
  margin-right: 12px;
`
