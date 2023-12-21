import { ThemeProvider } from "@mui/material/styles";
import InitialDataProvider from "./data/InitialDataProvider";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout";
import HomePage from './pages/HomePage'
import Reservations from './pages/BookingPage'
import About from './pages/About'
import Menu from './pages/Menu'
import Order from "./pages/Order"
import Login from "./pages/Login"
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ReservationSuccess from "./components/reservation/ReservationSuccess";
import { store } from "./app/store"
import { Provider } from "react-redux";
import Tables from "./pages/Tables";


function App() {

  return (
    <Provider store={store}>
      <InitialDataProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Routes>
                <Route path="/" element={<SharedLayout />}>
                  <Route index element={<HomePage />}></Route>
                  <Route path="reservations" element={<Reservations />}></Route>
                  <Route path="tables" element={<Tables />}></Route>
                  <Route
                    path="reservation-success"
                    element={<ReservationSuccess />}
                  ></Route>
                  <Route path="about" element={<About />}></Route>
                  <Route path="menu" element={<Menu />}></Route>
                  <Route path="order" element={<Order />}></Route>
                  <Route path="login" element={<Login />}></Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </LocalizationProvider>
        </ThemeProvider>
      </InitialDataProvider>
    </Provider>
  );
}

export default App;
