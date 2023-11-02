import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    primary: {
      main: "#495E57",
      dark: "#42554e",
      light: "#5b6e68",
    },
    secondary: {
      main: "#F4CE14",
      dark: "#dcb912",
      light: "#f5d32b",
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  fontSize:16
});

