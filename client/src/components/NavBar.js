import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => (
  <nav>
    <NavLink activeStyle={styles.active} exact to='/'>HOME</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to='/about'>ABOUT</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to='/blogs'>BLOG</NavLink>
  </nav>
)

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  }
}
export default NavBar;