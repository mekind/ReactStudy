import { styled } from 'styled-components';


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
  padding-right: 0;
`;

const MenuItems = ({
  number = '00', 
  name = 'HOME', 
}) => {
  return (
    <Container>
      {number && <Number>{number}</Number>}
      <Name>{name}</Name>
    </Container>
  )
};

export default MenuItems
