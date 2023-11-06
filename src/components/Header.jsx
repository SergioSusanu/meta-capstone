import React from 'react'
import GridWrapper from './common/GridWrapper'
import { useTheme } from "@mui/material/styles";
import AppBar from './AppBar'
import Row from './common/Row'

const Header = () => {
  const theme = useTheme()
  return (
      <GridWrapper >
        <AppBar />
      </GridWrapper>
  )
}

export default Header