import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import House from './pages/House';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/scss/index.scss'
const App = () => {
  return (
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="houses" element={<House />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
 
);}
export default App;