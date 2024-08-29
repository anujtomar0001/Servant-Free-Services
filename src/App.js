import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/WhatWeDo" element={<WhatWeDo />} />
      <Route path="/ContactUs" element={<Contact />} />
    </Routes>
    // </Router>
  );
}

export default App;
