import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";

const Row = (props) => {
  const theme = useTheme()

  return <Box {...props} sx={{ ...props.sx, py: theme.spacing(2) }}></Box>;
}

export default Row