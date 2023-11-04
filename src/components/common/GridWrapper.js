import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";

const GridWrapper = ({children}) => {
    const theme = useTheme()
    const GridWrapperStyles={
        maxWidth:theme.desktopWidth,
        mx:'auto',
        px:theme.spacing(2)
    }
  return (
    <Box sx={GridWrapperStyles}>{children}</Box>
  )
}

export default GridWrapper