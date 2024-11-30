// App.js
import React, { useEffect, useState } from 'react';
import {HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';

const App = () => {

  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
