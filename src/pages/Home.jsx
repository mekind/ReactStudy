import { styled } from 'styled-components'
import TextComponent from '../components/TextComponent'
import CircleComponent from '../components/CircleComponent'
import { useRecoilState } from 'recoil'
import { BackgroundUrl } from './Store'
import { useEffect } from 'react'


const Container = styled.div`
  @media (min-width: 850px) {
    display: flex;
    width: 100%;
  }

  @media (min-width: 375px) and (max-width: 850px) {
    text-align: center;
  }

  @media (max-width: 375){
    text-align: center;
  }
`;

const Left = styled.div`
  @media (min-width: 850px) {
    width: 50%;
    padding-left: 165px;
  }

  @media (min-width: 375px) and (max-width: 850px) {
  }

  @media (max-width: 375){
  }
`;

const Right = styled.div`
  @media (min-width: 850px) {
    width: 50%;
    padding-left: 281px;
  }

  @media (min-width: 375px) and (max-width: 850px) {
    /* width: 100%; */
    padding-bottom: 90px;
    padding-top: 156px;
  }

  @media (max-width: 375){
    width: 100%;  
  }
`;

const LeftWrapper = styled.div`
  @media (min-width: 850px) {
    width: 450px;
    padding-top: 35%;
  }

  @media (min-width: 375px) and (max-width: 850px) {
    padding-top:50px;
    width: 450px;
    margin:0 auto;
  }

  @media (max-width: 375){
    padding-top:48px;
    width: 327px;
    margin:0 auto;
  }
`;


const RightWrapper = styled.div`
  width: 450px;
  @media (min-width: 850px) {
    padding-top:395px;
  }

  @media (min-width: 375px) and (max-width: 850px) {
    margin: 0 auto;
  }

  @media (max-width: 375){

  }
`;

const subTitle = 'SO, YOU WANT TO TRAVEL TO';
const title = 'SPACE';
const body = 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!';

const Home = () => {
  const [ backgroundUrl, setBackgroundUrl ] = useRecoilState(BackgroundUrl)
  useEffect(() => {
    setBackgroundUrl('home')
  }, [])

  return (
    <Container >
      <Left>
        <LeftWrapper>
          <TextComponent subTitle={subTitle} title={title} body={body}/>
        </LeftWrapper>
      </Left>
      <Right>
        <RightWrapper>
          <CircleComponent/>
        </RightWrapper>
      </Right>
    </Container>
  )
}

export default Home
