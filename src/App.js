import { ThemeProvider } from "@mui/material/styles";
import InitialDataProvider from "./data/InitialDataProvider";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout";
import HomePage from './pages/HomePage'
import Reservations from './pages/Reservations'
import About from './pages/About'
import Menu from './pages/Menu'
import Order from "./pages/Order"
import Login from "./pages/Login"

function App() {

  return (
    <InitialDataProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />}></Route>
              <Route path="reservations" element={<Reservations />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="menu" element={<Menu />}></Route>
              <Route path="order" element={<Order />}></Route>
              <Route path="login" element={<Login />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </InitialDataProvider>
  );
}

export default App;
