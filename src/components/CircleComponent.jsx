import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const Circle = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  height: 274px;
  width: 274px;
  margin:0 auto;
  transition: outline 0.2s linear;
  text-decoration: none;
  outline: 0px solid rgba(255, 255, 255, 0.1);
  color: #0B0D17;
  &:hover {
    cursor: pointer;
    color: #0B0D17;
    outline-width: 88px;
  }
  &:active {
    color: #0B0D17;
  }
  &:visited {
    color: #0B0D17;
  }
`

const Explore = styled.p`
  font-family: 'Bellefair';
  font-size: 32px;
`

const CircleComponent = () => {
  return (
    <Circle to='/destination'>
      <Explore>EXPLORE</Explore>
    </Circle>
  )
}

export default CircleComponent
