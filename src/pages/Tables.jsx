import React from 'react'
import InnerPageHeader from '../components/common/InnerPageHeader'
import { Box } from '@mui/material'
import TablesMap from '../components/reservation/TablesMap'



const Tables = () => {
  return (
     <Box>
      <InnerPageHeader>Choose a Table</InnerPageHeader>
      <TablesMap />
    </Box>
  )
}

export default Tables