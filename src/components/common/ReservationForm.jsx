import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import Row from './Row';
import { useTheme } from "@mui/material/styles";
import { Select, MenuItem } from '@mui/material';

function ReservationForm() {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const theme = useTheme()
  const [selectedOption, setSelectedOption] = useState(''); 

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Reservation submitted!');
  };

  const FormStyles = {
    display:'flex',
    flexDirection:'column',
    gap: theme.spacing(2),
    width:380,
    marginLeft:'auto',
    marginRight:'auto'
  }

  return (
    <Row extraPadding>
    <form onSubmit={handleSubmit} style={FormStyles}>
      <DatePicker
        label="Date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <TextField
        label="Time"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
        required
      />
      <TextField
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
                value={selectedOption}
                label="Ocassion"
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