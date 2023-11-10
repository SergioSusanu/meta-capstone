import React from 'react'
import BookingForm from './ReservationForm'
import { useReducer } from "react";

const initialTimes = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
];

export const init = () => {
  return initialTimes
}

export const updateTimes = (state, action) => {
  //add slot
  //remove slot
  return state
}

const Bookings = () => {

  const [availableTimes, dispatchDateChange] = useReducer(updateTimes, initialTimes, init)

  const submitForm = (reservationData) =>{
    console.log(reservationData)
  }
  return (
    <BookingForm
     availableTimes={availableTimes}
     submitForm={submitForm}
     dispatchDateChange={dispatchDateChange}
    >

    </BookingForm>
  )
}

export default Bookings