import React from 'react'
import Nav from './Nav'
import Logo from './../assets/images/Logo.svg'

const Header = () => {
  return (
    <header>
        <div id='logo'>
          <img src={Logo} />
        </div>
        <Nav />
    </header>
  )
}

export default Header