import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import Row from '../common/Row';
import { Select, MenuItem } from '@mui/material';
import ReservationFormStyles from './ReservationFormStyles';
import dayjs from 'dayjs';

const initialData = {
  date: dayjs(),
  time:  '',
  guests: 1,
  ocassion:''
}
const initialTouch = {
  date: false,
  time:  false,
  guests: false,
  ocassion:false
}


function BookingForm({availableTimes, submitForm, dispatchDateChange}) {
  const [reservationData, setReservationData] = useState(initialData)
  const [touched, setTouched] = useState(initialTouch)
  const guestsError = touched.guests && (reservationData.guests === '' || reservationData.guests > 10 || reservationData.guests < 1)

  const handleChange = (e) => {
      setReservationData((prev) => {
       return {...prev, [e.target.name]:e.target.value}
    })
  };

  const handleDateChange = (date) => {
   setReservationData((prev) => {
      return {...prev, date}
    })
    dispatchDateChange({type:"fetch-slots", payload:date})
  };

  const handleBlur = (e) => {
    console.log("Blur");
    setTouched((prev) => {
       return {...prev, [e.target.name]:true}
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(reservationData)
  };

  return (
    <Row>
    <form onSubmit={handleSubmit} style={ReservationFormStyles()}>
      {/******* SELECT DATE ******/}
      <DatePicker
        label="Date"
        name='date'
        value={reservationData.date}
        onChange={handleDateChange}
        onBlur={handleBlur}
        minDate={dayjs()}
        required
      />

        {/******* SELECT TIME ******/}
       <FormControl fullWidth>
        <InputLabel id="select-time">Time</InputLabel>
        <Select
          labelId="select-time"
          id="select-time"
          value={reservationData.time}
          label="Time"
          onChange={handleChange}
          onBlur={handleBlur}
          name='time'
          data-testid="time-select"
          required
        >
           {availableTimes.map((slot,index) => {
            return <MenuItem key={index} value={slot} data-testid="time-slot">{slot}</MenuItem>
          })}
        </Select>
          {/* <FormHelperText>Please select an option</FormHelperText> */}
      </FormControl>

      {/******* SELECT NUMBER OF GUESTS ******/}
      <TextField
        name='guests'
        data-testid="guests"
        onChange={handleChange}
        onBlur={handleBlur}
        value={reservationData.guests}
        label="Number of Guests"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        required
        inputProps={{ min: 1, max: 10 }}
        helperText={guestsError ? "Please enter between 1 and 10 people" : ""}
        error = {guestsError}
      />

      {/******* SELECT Ocassion ******/}
        <FormControl fullWidth>
            <InputLabel id="ocassion">Ocassion</InputLabel>
            <Select
                labelId="ocassion"
                id="ocassion"
                value={reservationData.ocassion}
                label="Ocassion"
                name="ocassion"
                onChange={handleChange}
                data-testid="ocassion"
                required
            >
                <MenuItem value="birthday">Birthday</MenuItem>
                <MenuItem value="anniversary">Anniversary</MenuItem>
            </Select>
        </FormControl>

      <Button variant="contained" color="primary" type="submit"   data-testid = "submit" >
        Submit
      </Button>
    </form>
    </Row>
  );
}
 export default BookingForm