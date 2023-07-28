import { styled } from 'styled-components';
import { BodyText } from './TextComponent';

const Container = styled.div`
  @media (min-width: 375px) and (max-width: 850px) {
    padding-bottom: 97px;
  }
`;

const Name = styled.h3`
  padding-top: 11px;
  padding-bottom: 17px;
  text-transform: uppercase;
`

const Sub = styled.p`
  font-family : "Barlow";
  font-size : 16px;
  letter-spacing: 2.7px;
  color:  #D0D6F9;
  text-transform: uppercase;
`

const Body = styled(BodyText)`
  width:444px;
  @media (min-width: 375px) and (max-width: 850px) {
    width: 478px;
    margin:0 auto;
    line-height: 28px;
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
