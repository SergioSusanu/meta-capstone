import { Box, Grid } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";

const SocialMediaIconList = ({menu}) => {

    const theme = useTheme()
    const textColor = theme.themeMode === 'light' ? theme.palette.lightGray : theme.palette.primary.main

  return (
    <Box sx={{marginTop: theme.spacing(2)}}>
    <Grid container spacing={2}>
        {menu.map((item) => {
            return (<Grid key={item.id} item sx={{color:textColor}}>{item.icon}</Grid>)
        })}
    </Grid>
    </Box>
  )
}

export default SocialMediaIconList