import React from "react";
import BookingForm from "./ReservationForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI, fetchTables } from "./../../utils/fakeAPI";
import { useNavigate } from "react-router-dom";
import TablesMap from "./TablesMap";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateTablesStatutes } from "../../features/tablesSlice";


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
  const dispatch = useDispatch();

  const submitForm = (reservationData) => {
    if (submitAPI(reservationData)) {
      dispatch(updateTablesStatutes(fetchTables(new Date())))
      navigate("/tables");
    }
  };
  return (
    <Box>
      <BookingForm
        availableTimes={availableTimes}
        submitForm={submitForm}
        dispatchDateChange={dispatchDateChange}
      ></BookingForm>
    </Box>
  );
};

export default Bookings;
