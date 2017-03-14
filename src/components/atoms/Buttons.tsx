import * as React from 'react'
import styled from 'styled-components'

import { cells, color, fontSizes } from '../../styles/style-utils'

interface ButtonTypes {
  success?: boolean,
  error?: boolean
}

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  height: ${ cells(6) }
  padding: ${ cells(1) } ${ cells(2) };
  font-size: ${ fontSizes.standard };
  user-select: none;

  &:active {
    box-shadow: inset 0 1px 3px rgba(0,0,0,.12);
  }

  ${(props: ButtonTypes) => props.success ? `
    color: ${color.white};
    background-color: ${color.middleGreen};
    border: 1px solid ${color.middleGreen};

    &:hover {
      background-color: ${color.mayGreen};
      border: 1px solid ${color.mayGreen};
    }
   ` : ''}

   ${(props: ButtonTypes) => props.error ? `
    color: ${color.white};
    background-color: ${color.vermilion};
    border: 1px solid ${color.vermilion};

    &:hover {
      background-color: ${color.cgRed};
      border: 1px solid ${color.cgRed};
    }
   ` : ''}
`

const StyledTextButton = styled.button`
  background-color: transparent
  color: ${ color.azure };
  cursor: pointer;
  font-size: ${ fontSizes.standard };
  padding: 0;
  border: none;

  &:focus {
    outline: none
  }
`

interface TextButtonProps {
  className?: string
  text: string
  clickHandler: React.EventHandler<any>
}

export const TextButton = ({text, clickHandler, className}: TextButtonProps) => (
  <StyledTextButton className={className} onClick={clickHandler}>{text}</StyledTextButton>
)
