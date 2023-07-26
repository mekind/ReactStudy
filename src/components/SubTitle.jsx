import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
`

const Title = styled.p`
  font-family: 'Barlow';
  font-size: 28px;
  margin-right: 28px;
  letter-spacing: 4.72px;
  color: #FFFFFF;
`

const Number = styled(Title)`
  font-family: 'BarlowBold';
  color: #979797;
`



const SubTitle = ({number, title}) => {
  return (
    <Container>
      <Number>{number}</Number>
      <Title>{title}</Title>
    </Container>
  )
}

export default SubTitle