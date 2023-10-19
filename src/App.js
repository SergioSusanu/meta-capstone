import './assets/css/App.css';
import "./assets/css/Homepage.css";
import "./assets/css/normalize.css";
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import InitialDataProvider from './data/InitialDataProvider';
import CssBaseline from "@mui/material/CssBaseline";


function App() {
  return (
    <InitialDataProvider>
      <CssBaseline enableColorScheme />
      <div className="homepage">
        <Header />
        <Main />
        <Footer />
      </div>
    </InitialDataProvider>
  );
}

export default App;
