import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import { RecoilRoot } from 'recoil'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path = '/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/destination" element={<Destination />}/>
          <Route path="/destination/:planet" element={<Destination />}/>
          <Route path="/crew" element={<Crew />}/>
          <Route path="/crew/:crewNumber" element={<Crew />}/>
          <Route path="/technology" element={<Technology />}/>
          <Route path="/technology/:level" element={<Technology />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </RecoilRoot>
  )
}

export default App
