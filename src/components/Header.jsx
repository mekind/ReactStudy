import { NavLink } from "react-router-dom"
import { styled } from "styled-components"
import Logo from './Logo'
import MenuItems from './MenuItems'
import { useRecoilValue } from 'recoil';
import { BackgroundUrl } from '../pages/Store';

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
  
  @media (max-width: 400px){
    padding-left: 24px;
    width: 100%;  
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

  @media (min-width: 375px) and (max-width: 850px) {
    position: relative;
    display: flex;
    flex-grow: 1;
    height: 96px;
    margin-left: 231px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    justify-content: space-around;
    align-items: center;
  }

  @media (max-width: 400px){
    background-color:red;
    font-size: 0px;
  }
`

const NavStyle = styled(NavLink)`
  text-decoration: none;
`

const menuList = [
  { number: '00', name: 'HOME', url: '/' },
  { number: '01', name: 'DESTINATION', url: '/destination' },
  { number: '02', name: 'CREW', url: '/crew' },
  { number: '03', name: 'TECHNOLOGY', url: '/technology' },
];

const Header = () => {
  const now = useRecoilValue(BackgroundUrl).toUpperCase();
  return (
    <Container>
      <Logo/>
      <Line/>
      <Menu>
        {menuList.map((menu) => 
          (<NavStyle 
            key={menu.name} 
            to={menu.url}
            >
            <MenuItems number={menu.number} name={menu.name} now={now}/>
          </NavStyle>
        ))}
      </Menu>
    </Container>
  )
}

export default Header
