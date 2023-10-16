import './assets/css/App.css';
import "./assets/css/Homepage.css";
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import InitialDataProvider from './data/InitialDataProvider';

function App() {
  return (
    <InitialDataProvider>
      <div className="homepage">
        <Header />
        <Main />
        <Footer />
      </div>
    </InitialDataProvider>
  );
}

export default App;
