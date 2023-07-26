import '../css/header.css'
import { NavLink } from "react-router-dom"
import { styled } from "styled-components"
import Logo from './Logo'
import MenuItems from './MenuItems'


const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3.8%;
  padding-top: 4%;
`

const Line = styled.div`
  margin-left: 1%;
  margin-right: 1%;
  width: 30%;
  height: 1px;
  background: #979797;
`

const Menu = styled.div`
  display: flex;
  flex-grow:  1;
  width: 57.6%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  justify-content: space-around;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
`

const NavStyle = styled(NavLink)`
  padding-top: 4.3%;
  padding-bottom: 4.2%;
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
            to={menu.url}
            style={({isActive}) => (isActive ? activeStyles : undefined)}
            >
            <MenuItems number={menu.number} name={menu.name}/>
          </NavStyle>
        ))}
      </Menu>
    </Container>
  )
}

export default Header
