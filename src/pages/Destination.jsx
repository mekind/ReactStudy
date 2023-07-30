import { NavLink, useParams } from "react-router-dom";


import moon from '/assets/destination/image-moon.png';
import mars from '/assets/destination/image-mars.png';
import europa from '/assets/destination/image-europa.png';
import titan from '/assets/destination/image-titan.png';

import { useRecoilState } from "recoil";
import { BackgroundUrl } from "./Store";
import { useEffect } from "react";
import { styled } from "styled-components";

import MenuItems from "../components/MenuItems";
import SubTitle from "/src/components/SubTitle";
import DestText from "../components/DestText";

const Container = styled.div`
  @media (min-width: 850px) {
    display: flex;
    width: 100%;
  }

  @media (min-width: 500px) and (max-width: 850px) {
    display: flex;
    height: 1024px;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 500px){
    width:100%;
    height: 850px;
    text-align: center;
  }
`;

const Left = styled.div`
  @media (min-width: 850px) {
    width: 50%;
    padding-left: 167px;
    padding-top: 76px;
  }

  @media (max-width: 500px){
    width:100%;
  }
`;

const Right = styled.div`
  /* background-color: green; */
  @media (min-width: 850px) {
    width: 50%;
    padding-left: 112px;
    padding-top: 174px;
  }

  @media (min-width: 500px) and (max-width: 850px) {
    padding-top: 53px;
    align-items: center;
    padding-bottom: 62px;
  }

  @media (max-width: 500px){
    width:100%;
  }
`;

const LeftWrapper = styled.div`
  @media (min-width: 850px) {
    width: 445px;
    height:445px;
    margin:0 auto;
    margin-top: 97px;
  }

  @media (min-width: 500px) and (max-width: 850px) {
    width: 300px;
    height:300px;
    margin:0 auto;
    padding-top: 60px;
  }

  @media (max-width: 500px){
    width:100%;
  }
`;


const RightWrapper = styled.div`
  @media (min-width: 850px) {
    width: 445px;
  }

  @media (min-width: 500px) and (max-width: 850px) {
  width: 573px;
    margin: 0 auto;
    padding-top: 53px;
  }

  @media (max-width: 500px){
    width:100%;
  }
`;

const PlanetImg = styled.img.attrs(props => ({
  src: props.planeturl
}))`
  @media (min-width: 850px) {
    width: 445px;
    height:445px;
    margin:0 auto;
  }

  @media (min-width: 500px) and (max-width: 850px) {
    width: 300px;
    height:300px;
    margin:0 auto;
  }

  @media (max-width: 500px) {
    width: 170px;
    height:170px;
    margin:0 auto;
  }
`

const Planets = styled.div`
  display: flex;
  justify-content: space-around;
  width: 285px;


  @media (min-width: 500px) and (max-width: 850px) {
    margin: 0 auto;
  }

  @media (max-width: 500px){
    margin: 0 auto;
    padding: 26px 0 20px 0;
  }
`

const NavStyle = styled(NavLink)`
  padding-top:1%;
  padding-bottom: 1%;
  text-decoration: none;
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
    setBackgroundUrl('destination');
  }, [])

  const {planet='MOON'} = useParams();
  const title = 'PICK YOUR DESTINATION';
  const planetList = ['MOON', 'MARS', 'EUROPA', 'TITAN']

  return (
    <Container>
      <Left>
        <SubTitle number='01' title={title}/>
        <LeftWrapper>
          <PlanetImg planeturl={planetInfo[planet].imgUrl}/>
        </LeftWrapper>
      </Left>
      <Right>
        <RightWrapper>
          <Planets>
            {planetList.map( now => (
              <NavStyle 
                key={now} 
                to={'/destination/'+now}
              >
                <MenuItems number={''} name={now} now={planet} type='destination'/>
              </NavStyle>
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
