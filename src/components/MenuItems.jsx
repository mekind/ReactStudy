import { styled } from 'styled-components';


const Container = styled.div`
  display: flex;
`

const Name = styled.p`
  font-family: 'Barlow';
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 2.7px;
  padding-right: 11px;

`;

const Number = styled(Name)`
  font-family: 'BarlowBold';
  padding-right: 11px;
  @media (max-width: 768px) {
    font-size: 0px;
  }
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
