import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import House from './pages/House/house';
import Error from "./components/Error/Error";
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import './assets/scss/index.scss'
const App = () => {
  return (
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="house" element={<House />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
 
);}
export default App;