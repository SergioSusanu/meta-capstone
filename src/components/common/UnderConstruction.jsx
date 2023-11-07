import { Box, Typography } from '@mui/material'
import React from 'react'
import HandymanIcon from '@mui/icons-material/Handyman';
import { useTheme } from "@mui/material/styles";
import Row from './Row';

const UnderConstruction = () => {
     const theme = useTheme()
  return (
    <Row sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} extraPadding>
        <HandymanIcon sx={{color:theme.palette.primary.main, fontSize:'60px'}}/>
        <Typography variant='h2'>Page under construction</Typography>
    </Row>
  )
}

export default UnderConstruction