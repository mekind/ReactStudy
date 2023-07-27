import { NavLink } from "react-router-dom"
import { styled } from "styled-components"
import Logo from './Logo'
import MenuItems from './MenuItems'


const Container = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    padding-top: 40px;
    height: 96px;
    padding-left: 55px;
    width: 100%;  
  }

  @media (min-width: 375px) and (max-width: 768px) {
    height: 96px;
    padding-left: 39px;
    width: 100%;  
  }

  @media (max-width: 375){
    padding-left: 24px;
    width: 100%;  
  }
`

const Line = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    margin-left: 64px;
    paddind-right: 100px;
    width: 473px;
    height: 1px;
    background: rgba(255, 255 ,255, 0.25);
  }

`

const Menu = styled.div`
  
  :hover {
    border-bottom: solid 3px;
    border-bottom-color: #979797;
  }
  @media (min-width: 768px) {
    position: relative;
    display: flex;
    flex-grow: 1;
    height: 96px;
    margin-left: 507px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    justify-content: space-around;
    align-items: center;
  }

  @media (min-width: 375px) and (max-width: 768px) {
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

  @media (max-width: 375){
    padding-left: 24px;
    width: 100%;  
  }
`

const NavStyle = styled(NavLink)`
  padding-top: 4.3%;
  padding-bottom: 4.2%;
  text-decoration: none;
  :hover {
    border-bottom: 0;
  }
`

const menuList = [
  { number: '00', name: 'HOME', url: '/' },
  { number: '01', name: 'DESTINATION', url: '/destination' },
  { number: '02', name: 'CREW', url: '/crew' },
  { number: '03', name: 'TECHNOLOGY', url: '/technology' },
];

const Header = () => {
  const activeStyles = {
    'borderBottom': 'solid',
    'borderBottomColor': '#FFFFFF',
  }
  return (
    <Container>
      <Logo/>
      <Line/>
      <Menu>
        {menuList.map((menu) => 
          (<NavStyle 
            key={menu.name} 
            style={({isActive}) => (isActive?  activeStyles: undefined)}
            to={menu.url}
            >
            <MenuItems number={menu.number} name={menu.name}/>
          </NavStyle>
        ))}
      </Menu>
    </Container>
  )
}

export default Header
