import { NavLink, useParams } from "react-router-dom";
import SubTitle from "../components/SubTitle";
import douglas from '/assets/crew/image-douglas-hurley.webp';
import mark from '/assets/crew/image-mark-shuttleworth.webp';
import victor from '/assets/crew/image-victor-glover.webp';
import ano from '/assets/crew/image-anousheh-ansari.webp';

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
  @media (min-width: 850px) {
    display: flex;
    width: 100%;
  }
  
  @media (min-width: 400px) and (max-width: 850px) {
    flex-direction: column;
    text-align: center;
    height: 1024px;
    height: calc(100% - 96px);
  }

  @media (max-width: 400px){
    width:100%;
    height: 850px;
    text-align: center;
    flex-direction: column;
  }
`;

const Left = styled.div`
  @media (min-width: 850px) {
    width: 50%;
    padding-left: 167px;
    padding-top: 76px;
  }

  @media (min-width: 375px) and (max-width: 850px) {
    width: 100%;
  }

  @media (max-width: 400px){
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (min-width: 400px) and (max-width: 850px) {
    width: 100%;
    margin: 0 auto;
    align-items: center;
  }
  @media (max-width: 400px){
    width: 100%;
  }
`;

const LeftWrapper = styled.div`
  width:100%;
  @media (min-width: 850px) {
    padding-top: 154px;
  }

  @media (min-width: 375px) and (max-width: 850px) {
    text-align: center;
    padding-top: 60px;
    width:100%;
  }

  @media (max-width: 400px){

  }
`;


const RightWrapper = styled.div`
  display: flex;
  height: calc(100% - 62px);
  overflow: hidden;
  @media (min-width: 850px) {
    padding-top: 62px;

  }

  @media (min-width: 400px) and (max-width: 850px) {
    height: calc(100% - 40px);
    padding-top: 40px;
  }

  @media (max-width: 400px){
    width: 327px;
    height: 223px;
    margin: 0 auto;
    justify-content: center;
    border-bottom: 1px solid #979797;
  }     

`;

const Dots = styled.div`
  display: flex;  
  @media (min-width: 850px) {
    position:fixed;
    bottom: 94px;
  }

  @media (min-width: 400px) and (max-width: 850px) {
    width:100%;
    padding-top: 40px;
    justify-content: center;
  }

  @media (max-width: 400px){
    width:100%;
    justify-content: center;
    margin: 32px 0 32px 0;
  }
`

const Dot = styled.div`
  background: ${(props) => (props.color)};
  opacity: 17.44;
  width: 15px;
  height: 15px;
  margin-right: 24px;
  border-radius: 50%;
  @media (max-width: 400px){
    width: 10px;
    height: 10px;
  }
  
`



const Crew = () => {
  const [ backgroundUrl, setBackgroundUrl ] = useRecoilState(BackgroundUrl)
  useEffect(() => {
    setBackgroundUrl('crew')
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
          <img src={crewData[crewNumber].imgUrl} />
        </RightWrapper>
      </Right>
    </Container>   
  )
}

export default Crew
