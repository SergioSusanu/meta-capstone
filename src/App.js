import './assets/css/App.css';
import "./assets/css/Homepage.css";
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='homepage'>
    <Header />
    <Main />
    <Footer/>
    </div>
  );
}

export default App;
