import { NavLink, useParams } from "react-router-dom";
import SubTitle from "../components/SubTitle";
import douglas from '/assets/crew/image-douglas-hurley.png';
import mark from '/assets/crew/image-mark-shuttleworth.png';
import victor from '/assets/crew/image-victor-glover.png';
import ano from '/assets/crew/image-anousheh-ansari.png';
import crew from '/assets/crew/background-crew-desktop.jpg';
import { useRecoilState } from "recoil";
import { BackgroundUrl } from "./Store";
import { useEffect } from "react";
import { styled } from "styled-components";
import { CrewText } from "../components/CrewText";


const crewData = [
  {
    career: 'Commander',
    name: 'Douglas Hurley',
    text:'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    url: '/crew/0',
    imgUrl: douglas
  },
  {
    career: 'Mission Specialist ',
    name: 'MARK SHUTTLEWORTH',
    text:'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    url: '/crew/1',
    imgUrl: mark
  },
  {
    career: 'PILOT',
    name: 'Victor Glover',
    text:'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
    url: '/crew/2',
    imgUrl:victor
  },
  {
    career: 'Flight Engineer',
    name: 'Anousheh Ansari',
    text:'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    url: '/crew/3',
    imgUrl:ano
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
  width: 445px;
  height:445px;
  padding-top: 24%;
`;


const RightWrapper = styled.div`
  width: 445px;
  height: 100%;
  width:100%;
  overflow: hidden;
`;

const Dots = styled.div`
  display: flex;  
  position: fixed;
  bottom: 10%;
`

const Dot = styled.div`
  background: ${(props) => (props.color)};
  opacity: 17.44;
  margin-top: 10%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
`

const Crew = () => {
  const [ backgroundUrl, setBackgroundUrl ] = useRecoilState(BackgroundUrl)
  useEffect(() => {
    setBackgroundUrl(crew)
  }, [])
  const {crewNumber=0} = useParams();
  const title = 'MEET YOUR CREW';
  const color = 'rgba(151, 151,151, 0.17)';

  return (
    <Container>
      <Left>
        <SubTitle number='02' title={title}/>
        <LeftWrapper>
          <CrewText 
            sub={crewData[crewNumber].career} 
            name={crewData[crewNumber].name} 
            text = {crewData[crewNumber].text}/>
        </LeftWrapper>
        <Dots>
          {crewData.map( crew =>(
            <NavLink
              key={crew.name}
              to={crew.url}
            >
              <Dot color={crew.name === crewData[crewNumber].name ? '#FFFFFF' :color}/>
            </NavLink>
          ))}
        </Dots>
      </Left>
      <Right>
        <RightWrapper>
          <img src={crewData[crewNumber].imgUrl}/>
        </RightWrapper>
      </Right>
    </Container>   
  )
}

export default Crew
