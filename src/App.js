import { ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import InitialDataProvider from "./data/InitialDataProvider";
import CssBaseline from "@mui/material/CssBaseline";
import {theme} from "./Theme";
import GridWrapper from "./components/common/GridWrapper";

function App() {
  return (
    <InitialDataProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <div className="homepage">
        
            {/* <Header /> */}
            <Main />
            <Footer />
       
        </div>
      </ThemeProvider>
    </InitialDataProvider>
  );
}

export default App;
