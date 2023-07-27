import { styled } from 'styled-components';
import { BodyText } from './TextComponent';

const Container = styled.div`
`;

const Name = styled.h3`
  padding-top: 8%;
  padding-bottom: 8%;
  text-transform: uppercase;
  width: 200%;
`

const Sub = styled.h4`
  color: #979797;
  text-transform: uppercase;
`


export const CrewText = ({sub, name, text}) => {
  return (
    <Container>
      <Sub>{sub}</Sub>
      <Name>{name}</Name>
      <BodyText>{text}</BodyText>
    </Container>
  )
}
