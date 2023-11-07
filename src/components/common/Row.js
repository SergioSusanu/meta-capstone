import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";

const Row = (props) => {
  const theme = useTheme()
  const padding = props.extraPadding ? 4 : 2

  return <Box {...props} 
  sx={{ ...props.sx, 
    py: theme.spacing(padding), 
    
  }}></Box>;
}

export default Row