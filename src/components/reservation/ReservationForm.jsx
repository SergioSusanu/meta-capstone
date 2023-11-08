import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import Row from '../common/Row';
import { useTheme } from "@mui/material/styles";
import { Select, MenuItem } from '@mui/material';
import ReservationFormStyles from './ReservationFormStyles';

const initialData = {
  date: null,
  time: '',
  guests: 1,
  ocassion:''
}

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
      <DatePicker
        label="Date"
        name='date'
        value={selectedDate}
        onChange={handleDateChange}
      />
      <TextField
        name='time'
        value={reservationData.time}
        onChange={handleChange}
        label="Time"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
        required
      />
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

        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Ocassion</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
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