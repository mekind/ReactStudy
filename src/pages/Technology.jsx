import { NavLink, useParams } from "react-router-dom";
import vehicle from "/assets/technology/image-launch-vehicle-landscape.jpg";
import spaceport from "/assets/technology/image-spaceport-landscape.jpg";
import spacecapsule from "/assets/technology/image-space-capsule-landscape.jpg";

import { useRecoilState } from "recoil";
import { BackgroundUrl } from "./Store";
import { useEffect } from "react";
import { styled } from "styled-components";
import TechText from "../components/TechText";

const datas = [
  {
    title: 'LAUNCH VEHICLE',
    body: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    url: vehicle
  },
  {
    title: 'SPACEPORT',
    body: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    url: spaceport
  },
  {
    title: 'SPACE CAPSULE',
    body: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    url: spacecapsule
  }
]

const Tech = styled.div`
  display: block;
  width: 100%;
  @media (min-width: 400px) and (max-width: 850px) {
    height: 1024px;
  }

  @media (max-width: 400px){
    width:100%;
    height: 850px;
    text-align: center;
    flex-direction: column;
  }
`

const Container = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 850px) {
    height: calc(100% - 136px);
  }

  @media (min-width: 400px) and (max-width: 850px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  width: 60%;
  @media (min-width: 400px) and (max-width: 850px) {
    width: 100%;
    height: 494px;
    text-align : center;
  }

  @media (max-width: 400px) {
    width: 100%;
    text-align : center;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 40%;
  padding: 26px 0 0 0;

  @media (min-width: 400px) and (max-width: 850px) {
    width: 100%;
    padding: 60px 0 0 0;
    height: 370px;
  }

  @media (max-width: 400px){
    width: 100%;
    padding: 0;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  padding: 137px 0 0 165px;
  @media (min-width: 375px) and (max-width: 850px) {
    width:100%;
    padding: 0;
    display: block;
    align-content: center;
    align-items: center;
  }

  @media (max-width: 400px) {
    width: 100%;
    padding: 0;
  }
`;


const RightWrapper = styled.div`
  width: 515px;
  height: 527px;
  background: url(${props => props.url}) bottom no-repeat;
  background-size: cover;
  @media (min-width: 400px) and (max-width: 850px) {
    width:100%;
    height: 310px;
  }

  @media (max-width: 400px){
    width: 100%;
    height: 170px;
  }
`;

const Circles = styled.div`
  padding-right: 80px;
  @media (min-width: 400px) and (max-width: 850px) {
    display: flex;
    order: 3;
    padding: 56px 0 44px 0;
    justify-content: center;  
    height: calc(100% - 96px);
  }
  @media (max-width: 400px){
    padding: 34px 0 26px 0;
    display: flex; 
    justify-content: center;  
  }
`;

const Circle = styled.div`
  height:80px;
  width: 80px;
  border-radius: 50%;
  margin-bottom: 32px;  

  color: ${(props) => (props.active === 'true' ? 'black': 'white')};
  font-family: 'Bellefair';
  font-size:32px;
  letter-spacing:2px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #979797;
  background: ${(props) =>(props.active === 'true' ? 'white': undefined)};
  @media (min-width: 375px) and (max-width: 850px) {
    margin: 0 8px 0 8px;
  }

  @media (max-width: 400px){
    height: 40px;
    width: 40px;
    margin: 0 8px 0 8px;
    font-size: 16px;
    letter-spacing: 1px;
  }
`;

const NavStyle = styled(NavLink)`
  text-decoration: none;
  :hover {
    border: 0;
  }
`;

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
`;

const SubTitle = styled.div`
  display: flex;
  padding: 76px 0px 0px 166.5px;

  @media (min-width: 400px) and (max-width: 850px) {
    width: 100%;
    padding: 40px 0px 0px 38.5px;
  }

  @media (max-width: 400px) {
    text-align: center;
    justify-content: center;
    padding: 112px 0 32px 0;
  }
`

const Technology = () => {
  const [ backgroundUrl, setBackgroundUrl ] = useRecoilState(BackgroundUrl)
  useEffect(() => {
    setBackgroundUrl('technology');
  }, [])
  const {level=0} = useParams();
  const title = 'SPACE LAUNCH 101';
  const sub = 'THE TERMINOLOGY…';
  const levels = [0,1,2];

  return (
    <Tech>
      <SubTitle>
        <Number>03</Number>
        <Title>{title}</Title>
      </SubTitle>
      <Container>
        <Left>
          <LeftWrapper>
            <Circles>
              {levels.map(lev => (
                <NavStyle key={lev} to={'/technology/'+lev}>
                  <Circle active={(level == lev).toString()}>{lev+1}</Circle>
                </NavStyle>
              ))}
            </Circles>
            <TechText sub={sub} name={datas[level].title} text={datas[level].body}/>
          </LeftWrapper>
        </Left>
        <Right>
          <RightWrapper url={datas[level].url}/>
        </Right>
      </Container>     
    </Tech>
  )
}

export default Technology
