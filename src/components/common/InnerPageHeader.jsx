import React, { useEffect } from 'react'
import Row from './Row'
import { useTheme } from "@mui/material/styles";
import { Typography } from '@mui/material';

const InnerPageHeader = ({children}) => {
    const theme = useTheme()
    const pageName = window.location.pathname.replace('/','')

  return (
    <Row sx={{backgroundColor:theme.palette.primary.main,
    textAlign:'center',
    }}
    >
        <Typography variant='h1' sx={{color:theme.palette.lightGray, textTransform:'capitalize'}}>{pageName}</Typography>
    </Row>
  )
}

export default InnerPageHeader