import { NavLink } from 'react-router-dom'
import '../css/Menu.css'


const Menu = ({number, name, goUrl}) => {
  const activeStyles = {
    'borderBottom': 'solid',
    'borderBottomColor': '#FFFFFF',
  }

  return (
    <NavLink
      className='menu-container'
      style={({isActive}) => (isActive ? activeStyles : undefined)}
      to={goUrl}
    >
    <p className='menu-number'>{number}</p>
    <p className='menu-name'>{name}</p>
    </NavLink>
  )
}

export default Menu
