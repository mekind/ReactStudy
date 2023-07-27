import { NavLink, useParams } from "react-router-dom";
import SubTitle from "../components/SubTitle"
import vehicle from "/assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "/assets/technology/image-spaceport-portrait.jpg";
import spacecapsule from "/assets/technology/image-space-capsule-portrait.jpg";
import technology from '/assets/technology/background-technology-desktop.jpg';
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

const Container = styled.div`
  display: flex;
  height: 81.1%;
`;

const Left = styled.div`
  width: 50%;
  padding-left: 11.5%;
  padding-top : 7%;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  padding-top : 12%;
  padding-left: 5%;
`;

const LeftWrapper = styled.div`
  display: flex;
  padding-top: 24%;
`;


const RightWrapper = styled.div`
  width: 445px;
  height: 100%;
  width:100%;
  overflow: hidden;
`;

const Circles = styled.div`
  padding-right: 80px;
`;

const Circle = styled.div`
  height:80px;
  width: 80px;
  background: #FFFFFF;
  border-radius: 50%;
  margin-bottom: 32px;  
`;

const TechImg = styled.div`
  height: 80%;
  width: 80%;
  background: url(${(props) => (props.turl)});
  background-size: cover;
`




const Technology = () => {
  const [ backgroundUrl, setBackgroundUrl ] = useRecoilState(BackgroundUrl)
  useEffect(() => {
    setBackgroundUrl(technology);
  }, [])
  const {level=0} = useParams();
  const title = 'SPACE LAUNCH 101';
  const sub = 'THE TERMINOLOGY…';
  const levels = [0,1,2];
  return (
    <Container>
      <Left>
        <SubTitle number='03' title={title}/>
        <LeftWrapper>
          <Circles>
            {levels.map(lev => (
              <Circle key={lev} />
            ))}
          </Circles>
          <TechText sub={sub} name={datas[level].title} text={datas[level].body}/>
        </LeftWrapper>
      </Left>
      <Right>
        <RightWrapper>
          <TechImg turl={datas[level].url}/>
        </RightWrapper>
      </Right>
    </Container>     
  )
}

export default Technology
