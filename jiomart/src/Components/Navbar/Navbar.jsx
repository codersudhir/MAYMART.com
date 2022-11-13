import React from 'react'
import { NavLink } from 'react-router-dom'
import JioLogo from '../Common/Logo/JioLogo'
import SearchBar from './SearchBar'
import style from '../Styles/navbar.css'
import LoginSignuo from '../Common/Logo/LoginSignuo'
import Cart from '../Common/Logo/Cart'
import DrawerMenu from './DrawerMenu'
import DrawerLogo from '../Common/Logo/DrawerLogo'

const Navbar = () => {
  return (
    <div className='navbar'>
        <DrawerMenu />
        <NavLink to='/'><JioLogo /></NavLink>
        <SearchBar />
        <NavLink to='/signin'>
          <LoginSignuo />
        </NavLink>
        <NavLink to='/cart'>
          <Cart />
        </NavLink>
    </div>
  )
}

export default Navbar