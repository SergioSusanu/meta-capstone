import React from 'react'
import BookingForm from './ReservationForm'
import { useReducer } from "react";
import {fetchAPI, submitAPI} from './../../utils/fakeAPI'
import { useNavigate } from 'react-router-dom';

export const init = () => {
  return fetchAPI(new Date())
}

export const updateTimes = (state, action) => {
  //fetch avialable slots
  if (action.type === "fetch-slots") {
    return fetchAPI(new Date(action.payload))
  }
  return state
}

const Bookings = () => {

  const [availableTimes, dispatchDateChange] = useReducer(updateTimes, [], init)
  const navigate = useNavigate()

  const submitForm = (reservationData) =>{
     if (submitAPI(reservationData)) {
      navigate("/reservation-success");
     }
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