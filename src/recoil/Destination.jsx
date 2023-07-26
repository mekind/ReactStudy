import { useParams } from "react-router-dom";
import Title from "/src/components/Title";
import '/src/css/Destination.css';


import moon from '/assets/destination/image-moon.png';
import mars from '/assets/destination/image-mars.png';
import europa from '/assets/destination/image-europa.png';
import titan from '/assets/destination/image-titan.png';
import destination from '/assets/destination/background-destination-desktop.jpg';
import { useRecoilState } from "recoil";
import { BackgroundUrl } from "./Store";
import { useEffect } from "react";
import MenuItems from "../components/MenuItems";

const planetInfo = {
  MOON : {
    imgUrl : moon,
    text : 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance : '384,400 km',
    days : '3 days'
  },
  MARS: {
    imgUrl : mars,
    text : 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance : '225 MIL. km',
    days : '9 months'
  },
  EUROPA: {
    imgUrl : europa,
    text : 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance : '628 MIL. km',
    days : '3 years'
  },
  TITAN: {
    imgUrl : titan,
    text : 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance : '1.6 BIL. km',
    days : '7 years'
  },
}

const Destination = () => {
  const [ backgroundUrl, setBackgroundUrl ] = useRecoilState(BackgroundUrl)
  useEffect(() => {
    setBackgroundUrl(destination);
  }, [])

  const {planet='MOON'} = useParams();
  const title = 'PICK YOUR DESTINATION';
  const planetList = ['MOON', 'MARS', 'EUROPA', 'TITAN']

  return (
    <div className="planet-border">
      <div className="planet-left">
        <div className="ptitle">
          <Title number='01' title={title}/>
        </div>
        <div className="planet">
          <img src={planetInfo[planet].imgUrl}/>
        </div>
      </div>
      <div className="planet-right">
        <div className="planets" style={{width:'333px'}}>
        </div>  
        <div style={{width:'70%'}}>
          <p className="planet-name">{planet}</p>
          <p className='planet-text'>{planetInfo[planet].text}</p>
        </div>      
        <div className="destination-line"/>
        <div className="planet-info">
          <div className="planet-distance">
            <p className="info-title">AVG. DISTANCE</p>  
            <p>{planetInfo[planet].distance}</p>
          </div>
          <div className="planet-time">
            <p className="info-title">EST. TRAVEL TIME</p>  
            <p>{planetInfo[planet].days}</p>
          </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default Destination
