import * as React from 'react'
import styled from 'styled-components'

import { cells, color } from '../../styles/style-utils'

import ArrowIcon from '../../assets/icons/Arrow'

const Empty = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: -${cells(9)};
  justify-content: center;
`

const EmptyText = styled.div`
  max-width: 450px;
  text-align: center;
`

const StyledArrowIcon = styled(ArrowIcon)`
  transform: rotate(-120deg) scaleY(-1);
  margin-bottom: ${cells(1)};
  width: ${cells(14)};

  .outline {
    fill: ${color.gray.g_400}
  }
`

export interface EmptyListProps {
  text: string
}

const EmptyList = ({text}: EmptyListProps) => (
  <Empty>
    <StyledArrowIcon />
    <EmptyText>{text}</EmptyText>
  </Empty>
)

export default EmptyList
