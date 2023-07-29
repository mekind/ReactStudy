import { styled } from 'styled-components';
import { BodyText } from './TextComponent';

const Container = styled.div`
  @media (min-width: 400px) and (max-width: 850px) {
    padding-bottom: 97px;
  }
`;

const Name = styled.h3`
  padding-top: 11px;
  padding-bottom: 17px;
  text-transform: uppercase;

  @media (max-width: 400px){
    padding: 9px 0 16px 0 ;
    font-size: 24px;
  }
`

const Sub = styled.p`
  font-family : "Barlow";
  font-size : 16px;
  letter-spacing: 2.7px;
  color:  #D0D6F9;
  text-transform: uppercase;
  @media (max-width: 400px){
    font-size: 14px;
    letter-spacing: 2.36px;
  }
`

const Body = styled(BodyText)`
  width:444px;
  @media (min-width: 400px) and (max-width: 850px) {
    width: 478px;
    margin:0 auto;
    line-height: 28px;
  }

  @media (max-width: 400px){
    padding: 0;
    font-size: 15px;
    width: 327px;
    margin: 0 auto;
  }
`

const TechText = ({sub, name, text}) => {
  return (
    <Container>
      <Sub>{sub}</Sub>
      <Name>{name}</Name>
      <Body>{text}</Body>
    </Container>
  )
}
export default TechText
