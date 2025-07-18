import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import MainBody from "./Pages/MainBody/MainBody";
import Accessories from './Pages/Accessories';
import Connect from './Pages/Connect';
import TestRide from './Pages/TestRide';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/testride" element={<TestRide />} />
      </Routes>
    </Router>
  );
}

export default App;
