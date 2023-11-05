import { createTheme } from '@mui/material/styles';

const primaryGreen = "#495E57"
const primaryYellow = "#F4CE14"
const secondaryPeach= "#EE9972"
const secondaryCream= "#FBDABB"
const lightGray= "#EDEFEE"
const darkGray= "#333333"
const borderRadius = "16px"
const desktopWidth = "1140px"
const MarkaziFont ="'Markazi Text', serif"
const KarlaFont = "'Karla', sans-serif";

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
    secondaryPeach,
  },
  typography: {
    fontFamily: KarlaFont,
    fontSize: "16px",
    h1: {
      fontFamily: MarkaziFont,
      fontSize: "40px",
    },
    h2: {
      fontFamily: MarkaziFont,
      fontSize: "34px",
      color: primaryGreen,
    },
    h2Light: {
      color: lightGray,
      fontFamily: MarkaziFont,
      fontSize: "34px",
    },
    h3: {
      fontSize: "18px",
      fontWeight: 700,
      color: primaryGreen,
    },
    leadText: {
      fontFamily: MarkaziFont,
      fontSize: "24px",
    },
    cardTitle: {
      fontSize: "18px",
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
          textTransform: "none",
        },
      },
    },
  },
});

