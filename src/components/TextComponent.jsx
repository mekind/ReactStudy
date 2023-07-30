import { styled } from "styled-components"
export const BodyText = styled.p`
  font-family : "Barlow";
  font-size : 18px;
  color:  #D0D6F9;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  @media (max-width: 500px){
    font-size: 15px;
  }
`

const SubTitle = styled.h5`
  margin-top: 24px;
  @media (max-width: 500px){
    font-size : 16px;
    letter-spacing: 2.7px;
  }
`

const Title = styled.h1`
  padding: 24px 0 24px 0;
  @media (max-width: 500px){
    padding: 16px 0 16px 0;
    font-size : 80px;
  }
`


const TextComponent = ({subTitle, title, body}) => {
  return (
    <div>
      <SubTitle>{subTitle}</SubTitle>
      <Title>{title}</Title>
      <BodyText>{body}</BodyText>
    </div>
  )
}

export default TextComponent
