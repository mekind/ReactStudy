import Header from "../components/Header"
import '../css/typography.css'
import '../css/Home.css'

const Home = () => {
  return (
    <div >
      <div className="content">
        <div className="text">
          <div className="left">
            <p className="title">SO, YOU WANT TO TRAVEL TO</p>
            <h1>SPACE</h1>
            <p className="body">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>
        </div>

        <div className="right">
          <div className="circle">
            <p className="explore">EXPLORE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
