import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EventDisplay from "./components/EventDisplay";
import About from "./components/About"
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventDisplay />} />
        <Route path="/about" element={<About />} />    
        <Route path="/register" element={<Register />} />    
      </Routes>
    </Router>
  );
};

export default App;