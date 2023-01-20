import './css/main.css';
import Header from './components/Header/Header';
import Iconss from './components/Iconss/Iconss';
import Pages from './components/Pages/Pages';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <div className='header__relative'>
        <Header />
      </div>
      <div className='icons__flex'>
        <Iconss />
        <Pages />
      </div>
      <Footer />
    </>
  );
}

export default App;
