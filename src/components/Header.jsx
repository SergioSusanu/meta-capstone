import React from 'react'
import Nav from './Nav'
import Logo from './../assets/images/Logo.svg'

const Header = () => {
  return (
    <header>
      <div className='wrapper'>
        <div id='logo'>
          <img src={Logo} />
        </div>
        <Nav />
      </div>
    </header>

  )
}

export default Header