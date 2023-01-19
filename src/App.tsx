import './css/main.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Iconss from './components/Iconss/Iconss';
import Pages from './components/Pages/Pages';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <div className='header__relative'>
        <Header />
      </div>
      <div className='icons__flex'>
        <Iconss />
        <Pages />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
