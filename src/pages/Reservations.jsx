import React from 'react'
import InnerPageHeader from '../components/common/InnerPageHeader'
import { Box } from '@mui/material'
import ReservationForm from '../components/common/ReservationForm'


const Reservations = () => {
  return (
     <Box>
      <InnerPageHeader>Table Reservation</InnerPageHeader>
      <ReservationForm />
    </Box>
  )
}

export default Reservations