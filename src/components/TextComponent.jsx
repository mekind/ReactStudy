import { styled } from "styled-components"
export const BodyText = styled.p`
  font-family : "Barlow";
  font-size : 18px;
  color:  #D0D6F9;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
`


const TextComponent = ({subTitle, title, body}) => {
  return (
    <div>
      <h5 style={{ marginTop:'24px'}}>{subTitle}</h5>
      <h1>{title}</h1>
      <BodyText>{body}</BodyText>
    </div>
  )
}

export default TextComponent
