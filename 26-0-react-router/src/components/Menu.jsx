import { NavLink } from "react-router-dom"

function Menu() {
  return (
    <nav>
      <NavLink
        style={({isActive}) => isActive ? {color: 'lightgreen', textDecoration: 'none'} : {}}
        to='/'
        end>
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to='/contacts'>
        Contacts
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to='/about'>
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to='/courses'>
       Courses
      </NavLink>
    </nav>
  )
}

export default Menu
