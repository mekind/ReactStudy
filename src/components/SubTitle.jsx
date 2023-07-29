import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  @media (min-width: 400px) and (max-width: 850px) {
    padding-left: 38.5px;
    padding-top: 40px;
  }

  @media (max-width: 400px) {
    text-align: center;
    justify-content: center;
    padding: 24px 0 32px 0;
  }
`

const Title = styled.p`
  font-family: 'Barlow';
  font-size: 28px;
  margin-right: 28px;
  letter-spacing: 4.72px;
  color: #FFFFFF;
  @media (max-width: 400px){
    font-size: 16px;
    letter-spacing: 2.7px;
  }
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
