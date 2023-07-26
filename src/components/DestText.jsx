import { styled } from 'styled-components';
import { BodyText } from './TextComponent';

const Info = styled.div`
  display: flex;
  font-size: 18px;
  font-family: 'Bellefair';
  color: #FFFFFF;
`

const Line = styled.div`
  border: solid;
  border-width: 1px;
  border-color: #979797;
  width: 445px;
  margin-top: 54px;
  margin-bottom: 28px;
`

const InfoBox = styled.div`
  width: 50%;
`

const InfoTitle = styled.div`
  color: #D0D6F9;
  font-size: 14px;
  font-family: "Barlow";
  letter-spacing: 2.36px;
`

const InfoBody = styled.div`
  color: #FFFFFF;
  font-size: 28px;
  font-family: 'Bellefair';
`

const Name = styled.h2`
  padding-top: 8%;
`

const DestText = ({title, body, distance, days}) => {
  const infoTitle1 = 'AVG. DISTANCE';
  const infoTitle2 = 'Est. travel time';

  return (
    <div>
      <Name>{title}</Name>
      <BodyText>{body}</BodyText>
      <Line></Line>
      <Info>
        <InfoBox>
          <InfoTitle>{infoTitle1}</InfoTitle>
          <InfoBody>{distance}</InfoBody>
        </InfoBox>
        <InfoBox>
          <InfoTitle>{infoTitle2}</InfoTitle>
          <InfoBody>{days}</InfoBody>
        </InfoBox>
      </Info>
    </div>
  )
}

export default DestText
