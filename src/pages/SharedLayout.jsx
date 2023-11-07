import { Box } from '@mui/material'
import React from 'react'
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import { Outlet} from 'react-router-dom'

const SharedLayout = () => {
  return (
    <Box>
         <Header />
         <Outlet />
         <Footer />
    </Box>
  )
}

export default SharedLayout