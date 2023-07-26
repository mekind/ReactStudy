import { NavLink, useParams } from "react-router-dom";


import moon from '/assets/destination/image-moon.png';
import mars from '/assets/destination/image-mars.png';
import europa from '/assets/destination/image-europa.png';
import titan from '/assets/destination/image-titan.png';
import destination from '/assets/destination/background-destination-desktop.jpg';

import { useRecoilState } from "recoil";
import { BackgroundUrl } from "./Store";
import { useEffect } from "react";
import { styled } from "styled-components";

import MenuItems from "../components/MenuItems";
import SubTitle from "/src/components/SubTitle";
import DestText from "../components/DestText";

const Container = styled.div`
  display: flex;
  height: 81.1%;
`;

const Left = styled.div`
  width: 50%;
  padding-left: 11.5%;
  padding-top : 8.4%;
`;

const Right = styled.div`
  width: 50%;
  padding-top : 12%;
  padding-left: 5%;
`;

const LeftWrapper = styled.div`
  width: 445px;
  height:445px;
  padding-left: 4.4%;
  padding-top: 10.7%;
`;


const RightWrapper = styled.div`
  width: 445px;
`;

const PlanetImg = styled.div`
  
`

const Planets = styled.div`
  display: flex;
`


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
    <Container>
      <Left>
        <SubTitle number='01' title={title}/>
        <LeftWrapper>
          <PlanetImg>
            <img src={planetInfo[planet].imgUrl}/>
          </PlanetImg>
        </LeftWrapper>
      </Left>
      <Right>
        <RightWrapper>
          <Planets>
            {planetList.map( now => (
              <NavLink key={now} to={'/destination/'+now}>
                <MenuItems number={''} name={now}/>
              </NavLink>
            ))}
          </Planets>
          <DestText 
            title={planet} 
            body={planetInfo[planet].text}
            distance={planetInfo[planet].distance}
            days={planetInfo[planet].days}
          /> 
        </RightWrapper>
      </Right>
    </Container>    
  )
}

export default Destination
