import React from 'react'
import Nav from './Nav'
import Logo from './../assets/images/Logo.svg'
import GridWrapper from './common/GridWrapper'

const Header = () => {
  return (
    <header>
      <GridWrapper>
        <div id='logo'>
          <img src={Logo} />
        </div>
        <Nav />
      </GridWrapper>
    </header>

  )
}

export default Header