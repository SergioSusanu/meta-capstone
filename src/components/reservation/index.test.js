import { render, screen, fireEvent, getByLabelText } from "@testing-library/react";
import BookingForm from "./ReservationForm";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Bookings from ".";
import {init} from './index'
import { updateTimes } from "./index";
import { MemoryRouter } from "react-router-dom";

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

 test("Check html attributes for the inputs", () => {
     const { container } = render(
       <MemoryRouter>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
           <Bookings />
         </LocalizationProvider>
       </MemoryRouter>
     );

     const input = container.querySelector('input[name="guests"]');
     expect(input.type).toBe("number");
     expect(input).toHaveAttribute("min", "1");
     expect(input).toHaveAttribute("required");

     const timeInput = container.querySelector('input[name="time"]');
     expect(timeInput).toHaveAttribute("required");

     const ocassionInput = container.querySelector('input[name="ocassion"]');
     expect(ocassionInput).toHaveAttribute("required");
 });

test('Check init returns non-empty array', () => {

render(
  <MemoryRouter>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Bookings />
    </LocalizationProvider>
  </MemoryRouter>
);

 expect((init()).length).toBeGreaterThan(0)

 })

 test("Check updateTimes", async () => {
   render(
     <MemoryRouter>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
         <Bookings />
       </LocalizationProvider>
     </MemoryRouter>
   );
      const timeSelect = screen.getByLabelText("Time");
     const dateSelect = screen.getByLabelText("Date");

     const bookingDateBefore = "2023-11-01";
     const bookingDateAfter = "2023-09-07";

    fireEvent.change(dateSelect, { target: { value: bookingDateBefore } });
    fireEvent.blur(dateSelect)
    fireEvent.mouseDown(timeSelect);

    const onScreenItemsBefore = screen.getAllByTestId("time-slot");

    fireEvent.change(dateSelect, {target:{value:bookingDateAfter}});
    fireEvent.blur(dateSelect);
    fireEvent.mouseDown(timeSelect);
    const onScreenItemsAfter = screen.getAllByTestId("time-slot");

    // expect(screen.getAllByTestId("time-slot")).not.toBeNull()
     expect(onScreenItemsBefore.length).toBeGreaterThan(0)
     expect(onScreenItemsAfter.length).toBeGreaterThan(0);
     expect(onScreenItemsBefore).not.toBe(onScreenItemsAfter)


 });