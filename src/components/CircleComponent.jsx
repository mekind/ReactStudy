import React from 'react'
import { styled } from 'styled-components'

const Circle = styled.div`
  background: white;
  border-radius: 50%;
  height: 274px;
  width: 274px;
`

const Explore = styled.p`
  text-align: center;
  font-family: 'Bellefair';
  font-size: 32px;
  padding-top:45%;
`

const CircleComponent = () => {
  return (
    <Circle>
      <Explore>EXPLORE</Explore>
    </Circle>
  )
}

export default CircleComponent
