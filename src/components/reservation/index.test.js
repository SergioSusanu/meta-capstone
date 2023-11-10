import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./ReservationForm";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Bookings from ".";
import {init} from './index'
import { updateTimes } from "./index";

test('Check form components', () => {
    const mockFn = jest.fn()

    render(<LocalizationProvider dateAdapter={AdapterDayjs}>
        <BookingForm submitForm={mockFn} dispatchDateChange={mockFn}
        availableTimes={[]} />
        </LocalizationProvider>)

    const submit = screen.getByTestId("submit")
    expect(submit).toContainHTML("Submit")

    const select = screen.getByTestId("ocassion");
    expect(select).toContainHTML("Ocassion");

     const headingElement = screen.getByText("Number of Guests");
     expect(headingElement).toBeInTheDocument();

})

test('Check updateTimes and initFunctions', () => {
render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Bookings />
  </LocalizationProvider>
);

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

expect(init()).toEqual(initialTimes)

expect(updateTimes(initialTimes)).toEqual(initialTimes)

 })