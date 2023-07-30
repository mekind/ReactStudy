import logo from '/assets/shared/logo.svg';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';


const Container = styled.div`
  height: 48px;
  width: 48px;
  a {
    border: 0;
  }

  @media (max-width: 500px){
    padding: 24px 0 0 24px;
    position: absolute;
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
