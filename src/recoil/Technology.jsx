import { NavLink, useParams } from "react-router-dom";
import SubTitle from "../components/SubTitle"
import '/src/css/Technology.css';

import vehicle from "/assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "/assets/technology/image-spaceport-portrait.jpg";
import spacecapsule from "/assets/technology/image-space-capsule-portrait.jpg";
import technology from '/assets/technology/background-technology-desktop.jpg';
import { useRecoilState } from "recoil";
import { BackgroundUrl } from "./Store";
import { useEffect } from "react";

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



const Technology = () => {
  const [ backgroundUrl, setBackgroundUrl ] = useRecoilState(BackgroundUrl)
  useEffect(() => {
    setBackgroundUrl(technology);
  }, [])
  const {level=1} = useParams();
  const title = 'SPACE LAUNCH 101';
  const levels = [1,2,3];
  return (
    <div className="tech-container">
      <div className="tech-left">
        <div className="ctitle">
          <SubTitle number='03' title={title}/>
        </div>
        <div className="tech-box">
          <div className="big-dots">
            { levels.map(lev => {
              const toUrl = '/technology/'+ lev
              if(lev == level)
                return (<NavLink  key={lev} className='test' to={toUrl}>
                  <div style={{background:'white', color:'black'}} className="big-dot"><p>{lev}</p></div>
                </NavLink>)
              return (<NavLink  key={lev} className='test' to={toUrl}>
                <div className="big-dot"><p>{lev}</p></div>
              </NavLink>)
            })
            }
          </div>
          <div className="tech-intro">
            <p className="tech-tech">THE TERMINOLOGY…</p>
            <p className="tech-title">{datas[level-1].title.toUpperCase()}</p>
            <p className="tech-body">{datas[level-1].body}</p>
          </div>
        </div>
        
      </div>
      <div className="tech-right">
        <img className="tech-img" src={datas[level-1].url} />
      </div>
    </div>
    
  )
}

export default Technology
