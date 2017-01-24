import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const a = keyframes`
  0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
`;

const Root = styled.div`
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

  border: 1px solid #00bcd4;
  border-color: #00bcd4;
  color: #00bcd4;
`;

const Spinner = styled.div`
  animation: ${a} .6s infinite linear;
  border: 2px solid #e91e63;
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
  float: left;
  margin-right: .5rem;
  width: 14px;
  height: 14px;
`;

export const Loading = () => (
  <Root>
    <Spinner /> Loading…
  </Root>
);
