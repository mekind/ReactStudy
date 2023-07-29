import { styled } from 'styled-components';
import { BodyText } from './TextComponent';

const Container = styled.div`
  width:100%;
`;

const Name = styled.h3`
  padding-top: 15px;
  padding-bottom: 27px;
  text-transform: uppercase;
  @media (min-width: 400px) and (max-width: 850px) {
    padding-top: 8px 0 16px 0;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 400px){
    font-size: 24px;
  }
`

const Sub = styled.h4`
  color: #979797;
  text-transform: uppercase;
  @media (max-width: 400px){
    font-size: 16px;
  }
`

const CrewBody = styled(BodyText)`
  @media (min-width: 850px) {
    width: 444px; 
  }
  @media (min-width: 400px) and (max-width: 850px) {
    width: 520px; 
    margin: 0 auto;
  }
  @media (max-width: 400px){
    font-size: 15px;
    line-height: 25px;
    width: 327px;
    margin: 0 auto;
  }
`


export const CrewText = ({sub, name, text}) => {
  return (
    <Container>
      <Sub>{sub}</Sub>
      <Name>{name}</Name>
      <CrewBody>{text}</CrewBody>
    </Container>
  )
}
