import { NavLink } from "react-router-dom"
import { styled } from "styled-components"
import Logo from './Logo'
import MenuItems from './MenuItems'
import { useRecoilValue } from 'recoil';
import { BackgroundUrl } from '../pages/Store';
import hambuger from '/assets/shared/icon-hamburger.svg';
import close from '/assets/shared/icon-close.svg';
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 850px) {
    padding: 40px 0px 0px 55px;
    width: 100%;  
  }
  
  @media (min-width: 375px) and (max-width: 850px) {
    height: 96px;
    padding-left: 39px;
    width: 100%;  
    padding-bottom: 21px;
  }
  
  @media (max-width: 500px){
    align-items: normal;
    position: absolute;
    padding: 0;
    width: 100%; 
    height: ${props => props.isopen ? '100%': '64px'};
  }
`

const Line = styled.div`
  @media (min-width: 850px) {
    position: absolute;
    margin-left: 112px;
    z-index: 1;
    width: 473px;
    height: 1px;
    background: rgba(255, 255 ,255, 0.25);
  }
`

const Menu = styled.div`
  @media (min-width: 850px) {
    position: relative;
    z-index: 0;
    display: flex;
    flex-grow: 1;
    margin-left: 507px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    justify-content: space-around;
    align-items: center;
  }

  @media (min-width: 500px) and (max-width: 850px) {
    display: flex;
    flex-grow: 1;
    height: 96px;
    margin-left: 231px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    justify-content: space-around;
    align-items: center;
  }

  @media (max-width: 500px) {
    display: ${props => props.isopen ? 'flex': 'none'};
    flex-direction: column;
    width: 254px;
    right: 0;
    position: absolute;
    padding-top: 118px;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
  }
`

const NavStyle = styled(NavLink)`
  text-decoration: none;
`

const Hamburger = styled.div`

  @media (max-width: 500px) {
    position: absolute;
    top: 33px;
    right: 24px;
    background: url(${props => props.isopen ? close: hambuger}) center;
    background-size: cover;
    width: ${props => props.isopen ? '24px': '19.09px'};
    height: ${props => props.isopen ? '21px': '19.09px'};
  }
`

const menuList = [
  { number: '00', name: 'HOME', url: '/' },
  { number: '01', name: 'DESTINATION', url: '/destination' },
  { number: '02', name: 'CREW', url: '/crew' },
  { number: '03', name: 'TECHNOLOGY', url: '/technology' },
];

const Header = () => {
  const now = useRecoilValue(BackgroundUrl).toUpperCase();
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <Container isopen={isOpen}>
      <Logo/>
      <Line/>
      <Menu isopen={isOpen}>
        {menuList.map((menu) => 
          (<NavStyle 
            key={menu.name} 
            to={menu.url}
            >
            <MenuItems number={menu.number} name={menu.name} now={now}/>
          </NavStyle>
        ))}
      </Menu>
      <Hamburger onClick={onClick} isopen={isOpen}/>
    </Container>
  )
}

export default Header
