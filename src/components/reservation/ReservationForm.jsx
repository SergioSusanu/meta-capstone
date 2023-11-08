import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import Row from '../common/Row';
import { useTheme } from "@mui/material/styles";
import { Select, MenuItem } from '@mui/material';
import ReservationFormStyles from './ReservationFormStyles';
import dayjs from 'dayjs';

const initialData = {
  date: null,
  time: null,
  guests: 1,
  ocassion:''
}

const AvailableTimeSlots = ['17:00','17:30','18:00','18:30','19:00','19:30','20:00']

function ReservationForm() {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [reservationData, setReservationData] = useState(initialData)

  const handleChange = (e) => {
      setReservationData((prev) => {
      return {...prev, [e.target.name]:e.target.value}
    })
  };

  const handleDateChange = (date) => {
   setReservationData((prev) => {
      return {...prev, date}
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Row extraPadding>
    <form onSubmit={handleSubmit} style={ReservationFormStyles()}>
      {/******* SELECT TIME ******/}
      <DatePicker
        label="Date"
        name='date'
        value={selectedDate}
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
        >
           {AvailableTimeSlots.map((slot,index) => {
            return <MenuItem key={index} value={slot}>{slot}</MenuItem>
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
            >
                <MenuItem value="birthday">Birthday</MenuItem>
                <MenuItem value="anniversary">Anniversary</MenuItem>
            </Select>
        </FormControl>

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
    </Row>
  );
}
 export default ReservationForm