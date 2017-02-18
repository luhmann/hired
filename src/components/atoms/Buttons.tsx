import * as React from 'react'
import styled from 'styled-components'

import { color, standardFontSize } from '../../styles/style-utils'

interface ButtonTypes {
  success?: boolean,
  error?: boolean
}

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  padding: .65rem 2rem;
  font-size: 1rem;
  user-select: none;
  position: relative;
  z-index: 1;

  &:active {
    box-shadow: inset 0 1px 3px rgba(0,0,0,.12);
  }

  ${(props: ButtonTypes) => props.success ? `
    color: ${color('white')};
    background-color: ${color('success')};
    border: 1px solid ${color('success')};

    &:hover {
      background-color: ${color('successHover')};
      border: 1px solid ${color('successHover')};
    }
   ` : ''}

   ${(props: ButtonTypes) => props.error ? `
    color: ${color('white')};
    background-color: ${color('error')};
    border: 1px solid ${color('error')};

    &:hover {
      background-color: ${color('errorHover')};
      border: 1px solid ${color('errorHover')};
    }
   ` : ''}
`



const StyledTextButton = styled.button`
  align-self: stretch;
  background-color: transparent
  color: ${ color('turquoiseSurf') };
  cursor: pointer;
  font-size: ${ standardFontSize };
  padding: 0;
  border: none;

  &:focus {
    outline: none
  }
`

interface TextButtonProps {
  text: string
}

export const TextButton = ({text}: TextButtonProps) => (
  <StyledTextButton>{text}</StyledTextButton>
)
