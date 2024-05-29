import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import LogementCarousel from "./pages/House/logement";
import Error from "./pages/error-page";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import "./assets/scss/index.scss";
const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="logement/:houseId" element={<LogementCarousel />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};
export default App;
