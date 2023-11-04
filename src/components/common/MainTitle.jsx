import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";

const MainTitle = ({title, subTitle, titleComponent, subtitleComponent, titleTheme}) => {

    const theme = useTheme()

  return (
    <Box>
        <Typography variant={titleComponent}
            sx={{color:theme.palette.secondary.main}}
        >{title}</Typography>
        <Typography variant={subtitleComponent}
        sx={titleTheme === 'dark' ? {color:theme.palette.primary.main}
        :
        {color:theme.palette.lightGray}}
        >{subTitle}</Typography>
    </Box>
  )
}

export default MainTitle