import React from 'react'
import InnerPageHeader from '../components/common/InnerPageHeader'
import { Box } from '@mui/material'
import ReservationForm from '../components/reservation/ReservationForm'
import Bookings from '../components/reservation'


const Reservations = () => {
  return (
     <Box>
      <InnerPageHeader>Table Reservation</InnerPageHeader>
      <Bookings />
    </Box>
  )
}

export default Reservations