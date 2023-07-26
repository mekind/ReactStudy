import React from 'react'
import { styled } from 'styled-components'

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  height: 274px;
  width: 274px;
  transition: outline 0.2s linear;
  outline: 0px solid rgba(255, 255, 255, 0.1);
  &:hover {
    cursor: pointer;
    outline-width: 88px;
  }
`

const Explore = styled.p`
  font-family: 'Bellefair';
  font-size: 32px;
`

const CircleComponent = () => {
  return (
    <Circle>
      <Explore>EXPLORE</Explore>
    </Circle>
  )
}

export default CircleComponent
