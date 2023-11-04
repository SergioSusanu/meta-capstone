import React from 'react'
import Nav from './Nav'
import Logo from './../assets/images/Logo.svg'
import GridWrapper from './common/GridWrapper'
import { Box } from '@mui/material';

const Header = () => {
  return (
    <header>
      <GridWrapper>
        <Box id='logo'>
          <img src={Logo} />
        </Box>
        <Nav />
      </GridWrapper>
    </header>

  )
}

export default Header