import { styled } from 'styled-components';


const Container = styled.div`
  display: flex;

  ${({active, type}) => {
    switch(type){
      case 'destination':
        console.log(type)
        return {
          'padding-bottom': active ? '12px' : '15px',
          'border-bottom': active ? 'solid 3px  #FFFFFF' : '',
        }
        default:
          console.log(type)
          return {
            'padding-top' : '39px',
            'padding-bottom': active ? '35px' : '38px',
            'border-bottom': active ? 'solid 3px  #FFFFFF' : '',
        }
    }
  }};
  
  &:hover:not(${props => !props.active}){
    border-bottom: solid 3px  #979797;
    padding-bottom: ${props => props.type === 'header' ? '35px' : '12px'};
  }
`

const Name = styled.p`
  font-family: 'Barlow';
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 2.7px;
  :hover {
    border: 0;
  }
  `;

const Number = styled(Name)`
  font-family: 'BarlowBold';
  padding-right: 11px;
  @media (max-width: 850px) {
    font-size: 0px;
    padding-right: 0px;
  }
`;



const MenuItems = ({
  number = '00', 
  name = 'HOME',
  type = 'header',
  now = 'HOME',
}) => {
  const active = name === now ? 'true' : undefined;
  return (
    <Container active={active} type={type}>
      {number && <Number>{number}</Number>}
      <Name>{name}</Name>
    </Container>
  )
};

export default MenuItems
