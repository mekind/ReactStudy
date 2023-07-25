import { NavLink, useParams } from "react-router-dom";
import Title from "../components/Title"
import '/src/css/Technology.css';

const datas = [
  {
    title: 'LAUNCH VEHICLE',
    body: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    url: "/public/assets/technology/image-launch-vehicle-portrait.jpg"
  },
  {
    title: 'SPACEPORT',
    body: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    url: "/public/assets/technology/image-spaceport-portrait.jpg"
  },
  {
    title: 'SPACE CAPSULE',
    body: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    url: "/public/assets/technology/image-space-capsule-portrait.jpg"
  }
]



const Technology = () => {
  const {level=0} = useParams();
  const title = 'SPACE LAUNCH 101';

  return (
    <div className="tech-container">
      <div className="tech-left">
        <div className="ctitle">
          <Title number='03' title={title}/>
        </div>
        <div className="tech-box">
          <div className="big-dots">
            <NavLink>
              <div className="big-dot">1</div>
            </NavLink>

            <NavLink>
              <div className="big-dot">2</div>
            </NavLink>

            <NavLink>
              <div className="big-dot">3</div>
            </NavLink>

          </div>
          <div className="tech-intro">
            <p className="tech-tech">THE TERMINOLOGY…</p>
            <p className="tech-title">{datas[level].title.toUpperCase()}</p>
            <p className="tech-body">{datas[level].body}</p>
          </div>
        </div>
        
      </div>
      <div className="tech-right">
        <img className="tech-img" src={datas[level].url} />
      </div>
    </div>
    
  )
}

export default Technology
