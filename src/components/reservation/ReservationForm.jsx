import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import Row from '../common/Row';
import { Select, MenuItem } from '@mui/material';
import ReservationFormStyles from './ReservationFormStyles';

const initialData = {
  date: null,
  time:  '',
  guests: 1,
  ocassion:''
}


function BookingForm({availableTimes, submitForm, dispatchDateChange}) {
  const [reservationData, setReservationData] = useState(initialData)

  const handleChange = (e) => {
      console.log(e.target.name+" yes");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(reservationData)
  };

  return (
    <Row>
    <form onSubmit={handleSubmit} style={ReservationFormStyles()}>
      {/******* SELECT TIME ******/}
      <DatePicker
        label="Date"
        name='date'
        value={reservationData.date}
        onChange={handleDateChange}
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
          name='time'
          data-testid="time-select"
        >
           {availableTimes.map((slot,index) => {
            return <MenuItem key={index} value={slot} data-testid="time-slot">{slot}</MenuItem>
          })}
        </Select>
      </FormControl>

      {/******* SELECT NUMBER OF GUESTS ******/}
      <TextField
        name='guests'
        onChange={handleChange}
        value={reservationData.guests}
        label="Number of Guests"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        required
        inputProps={{ min: 1, max: 10 }}
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