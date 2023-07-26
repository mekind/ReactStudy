import logo from '/assets/shared/logo.svg';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';


const Container = styled.div`
  height: 48px;
  width: 48px;
  a {
    border: 0;
  }
`


const Logo = () => {
  return (
    <Container>
      <NavLink to='/'>
        <img src={logo}/>
      </NavLink>
    </Container>
  )
}

export default Logo
