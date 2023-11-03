import { createTheme } from '@mui/material/styles';

const primaryGreen = "#495E57"
const primaryYellow = "#F4CE14"
const secondaryPeach= "#EE9972"
const secondaryCream= "#FBDABB"
const lightGray= "#EDEFEE"
const darkGray= "#333333"
const borderRadius = "16px"
const desktopWidth = "986px"

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryGreen,
      dark: "#42554e",
      light: "#5b6e68",
    },
    secondary: {
      main: primaryYellow,
      dark: "#dcb912",
      light: "#f5d32b",
    },
    lightGray,
    darkGray,
    secondaryCream,
    secondaryPeach
  },
  typography: {
    fontFamily: "Karla, sans-serif",
    fontSize: "16px",
    h1: {
      fontFamily: "Markazi Text",
      fontSize: "3.5rem",
    },
    h2: {
      fontFamily: "Markazi Text",
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "1.2rem",
      fontFamily: "Karla, sans-serif",
      fontWeight: 700,
      color: primaryGreen,
    },
    leadText: {
      fontFamily: "Markazi Text",
      fontSize: "1.2rem",
    },
    cardTitle: {
      fontSize: "1.2rem",
      fontFamily: "Karla, sans-serif",
      fontWeight: 700,
    },
  },
  borderRadius: borderRadius,
  desktopWidth,
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform:'none',
        }
      }
    }
  }
});

