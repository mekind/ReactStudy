import { NavLink, useParams } from "react-router-dom";
import SubTitle from "../components/SubTitle";
import '../css/Crew.css'
import douglas from '/assets/crew/image-douglas-hurley.png';
import mark from '/assets/crew/image-mark-shuttleworth.png';
import victor from '/assets/crew/image-victor-glover.png';
import ano from '/assets/crew/image-anousheh-ansari.png';
import crew from '/assets/crew/background-crew-desktop.jpg';
import { useRecoilState } from "recoil";
import { BackgroundUrl } from "./Store";
import { useEffect } from "react";


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

const Crew = () => {
  const [ backgroundUrl, setBackgroundUrl ] = useRecoilState(BackgroundUrl)
  useEffect(() => {
    setBackgroundUrl(crew)
  }, [])
  const {crewNumber=0} = useParams();
  const title = 'MEET YOUR CREW';


  return (
    <div className="crew-container">
      <div className="crew-left">
        <div className="ctitle">
          <SubTitle number='02' title={title}/>
        </div>
        <div className="crew-intro">
          <p className="crew-career">{crewData[crewNumber].career.toUpperCase()}</p>
          <p className="crew-name">{crewData[crewNumber].name.toUpperCase()}</p>
          <p className="crew-text">{crewData[crewNumber].text}</p>
        </div>
        <div className="dots">
          {crewData.map( data => {
            if(data.name == crewData[crewNumber].name)
              return (<NavLink className='test'  key={data.name} to={data.url}>
                <div className="dot" style={{backgroundColor: '#FFFFFF'}}/>
              </NavLink>
              );
              
            return (<NavLink className='test' key={data.name} to={data.url}>
              <div className="dot"/>
            </NavLink>
            );
          })}
        </div>
      </div>
      <div className="crew-right">
        <img src={crewData[crewNumber].imgUrl} style={{overflow:'hidden'}}/>
      </div>
    </div>
    
  )
}

export default Crew
