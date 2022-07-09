// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';
import Products from './Components/Products/Products'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer';
import Slogan from './Components/Slogan/Slogan';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Slogan />
      <About />
      <Products />
      <ContactUs/>
      <Footer/>
    </ >
  );
}

export default App;