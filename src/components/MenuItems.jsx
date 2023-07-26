import { styled } from 'styled-components';
import '../css/Menu.css'


const Container = styled.div`
  display: flex;
`

const Number = styled.p`
  font-family: 'BarlowBold';
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 2.7px;
  padding-right: 11px;
`;

const Name = styled(Number)`
  font-family: 'Barlow';
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
