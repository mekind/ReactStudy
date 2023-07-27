import { styled } from "styled-components"


const Error404 = styled.p`
  height:100%;
  font-size: 150px;
  color: #FFFFFF;
  text-align: center;
  background:black
`;

const NotFound = () => {
  return (
    <Error404>Not Found</Error404>
  )
}

export default NotFound
