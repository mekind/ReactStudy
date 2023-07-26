import { styled } from 'styled-components'
import TextComponent from '../components/TextComponent'
import CircleComponent from '../components/CircleComponent'
import { useRecoilState } from 'recoil'
import { BackgroundUrl } from './Store'
import { useEffect } from 'react'
import home from '/assets/home/background-home-desktop.jpg';

const Container = styled.div`
  display: flex;
  height: 81.1%;
`;

const Left = styled.div`
  width: 38.6%;
  margin-left: 11.4%;
`;

const Right = styled.div`
  width: 50%;
`;

const LeftWrapper = styled.div`
  display: flex;
  padding-top: 25%;
  width: 450px;
`;


const RightWrapper = styled.div`
  padding-top:40%;
  padding-left: 31.2%;
  width: 450px;
`;

const subTitle = 'SO, YOU WANT TO TRAVEL TO';
const title = 'SPACE';
const body = 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!';

const Home = () => {
  const [ backgroundUrl, setBackgroundUrl ] = useRecoilState(BackgroundUrl)
  useEffect(() => {
    setBackgroundUrl(home)
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
