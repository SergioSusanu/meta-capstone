import React from "react";
import BookingForm from "./ReservationForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./../../utils/fakeAPI";
import { useNavigate } from "react-router-dom";
import TablesMap from "./TablesMap";
import { Box } from "@mui/material";


export const init = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  //fetch avialable slots
  if (action.type === "fetch-slots") {
    return fetchAPI(new Date(action.payload));
  }
  return state;
};

const Bookings = () => {
  const [availableTimes, dispatchDateChange] = useReducer(
    updateTimes,
    [],
    init
  );
  const navigate = useNavigate();

  const submitForm = (reservationData) => {
    if (submitAPI(reservationData)) {
      navigate("/reservation-success");
    }
  };
  return (
    <Box>
      <BookingForm
        availableTimes={availableTimes}
        submitForm={submitForm}
        dispatchDateChange={dispatchDateChange}
      ></BookingForm>
     <TablesMap />
    </Box>
  );
};

export default Bookings;
