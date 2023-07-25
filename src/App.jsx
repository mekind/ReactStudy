import './css/typography.css'
import './css/App.css'
import Home from './recoil/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './recoil/Layout'
import Destination from './recoil/Destination'
import Crew from './recoil/Crew'
import Technology from './recoil/Technology'
import './css/typography.css'



const App = () => {
  return (
    <Routes>
      <Route path = '/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/destination" element={<Destination />}/>
        <Route path="/destination/:planet" element={<Destination />}/>
        <Route path="/crew" element={<Crew />}/>
        <Route path="/crew/:crewNumber" element={<Crew />}/>
        <Route path="/technology" element={<Technology />}/>
        <Route path="/technology/:level" element={<Technology />}/>
      </Route>
    </Routes>
  )
}

export default App
