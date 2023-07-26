import { styled } from 'styled-components';
import '../css/Menu.css'


const Container = styled.div`
  display: flex;
`

const Number = styled.p`
  font-family: 'Barlow';
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
  letter-spacing: 2.7px;
  padding-right: 11px;
`;

const Name = styled(Number)`
  font-weight: normal;
`;

const MenuItems = ({
  number = '00', 
  name = 'HOME', 
}) => {
  return (
    <Container>
      <Number>{number}</Number>
      <Name>{name}</Name>
    </Container>
  )
};

export default MenuItems
