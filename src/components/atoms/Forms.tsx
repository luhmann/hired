import styled from 'styled-components'

import { cells, color, fontSizes } from '../../styles/style-utils'
import { Row } from '../atoms/Containers'

export const Fieldset = styled(Row)`
  align-items: center;
  display: flex;
  height: ${cells(5)};
  justify-content: space-between;
`
export const TextInput = styled.input`
  border: none;
  font-size: ${fontSizes.standard};
  margin: 0;
  padding: 0;
  flex-grow: 1;
  text-align: right;

  &:focus {
    color: ${ color.azure };
    outline: none;
  };
`

export const Label = styled.label`
  margin-right: 12px;
`
