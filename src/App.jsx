import './css/typography.css'
import './css/App.css'
import Home from './recoil/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './recoil/Layout'
import Planet from './recoil/Planet'
import Destination from './recoil/Destination'
import Crew from './recoil/Crew'
import Technology from './recoil/Technology'


function App() {
  return (
    <Routes>
      <Route path = '/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/destination" element={<Destination />}>
          <Route path=':planet' element={<Planet/>}/>
        </Route>
        <Route path="/crew" element={<Crew />}/>
        <Route path="/technology" element={<Technology />}/>
      </Route>
    </Routes>
  )
}

export default App
