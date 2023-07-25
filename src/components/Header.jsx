import Icon from "./Icon"
import '../css/header.css'
import { NavLink } from "react-router-dom"

const Header = () => {
  const activeStyles1 = {
    'border-bottom': 'solid',
    'border-bottom-color': '#FFFFFF',
    'width' : '10%'
  }

  const activeStyles2 = {
    'border-bottom': 'solid',
    'border-bottom-color': '#FFFFFF',
    'width' : '20%'

  }

  return (
    <div className="container">
      <div className="logo">
        <Icon name='logo'/>
      </div>
      <div className="line">
        
      </div>
      <div className="menu">
          <NavLink 
            className='a1'
            style={({isActive}) => (isActive ? activeStyles1 : undefined)}
            to={'/'}
          >
              00 HOME
          </NavLink>
          <NavLink 
            className='a2'
            style={({isActive}) => (isActive ? activeStyles2 : undefined)}
            to={'/destination'}
          >
            01 DESINTATION
          </NavLink>
          <NavLink
            className='a1'
            style={({isActive}) => (isActive ? activeStyles1 : undefined)}
            to={'/crew'}
          >
          02 CREW
          </NavLink>
          <NavLink
            className='a2'
            style={({isActive}) => (isActive ? activeStyles2 : undefined)}
            to={'/technology'}
          >
            03 TECHNOLOGY
          </NavLink>
      </div>
    </div>
  )
}

export default Header
