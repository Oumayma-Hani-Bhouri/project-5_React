import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Logementdetails from "./pages/House/logement";
import Notfoundpage from "./pages/error-page";
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
          <Route path="logement/:houseId" element={<Logementdetails />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};
export default App;
