import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Techniques from './components/Techniques'; // Create this new component


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Contact />
          </>
        } />
        <Route path="/techniques" element={<Techniques />} />
      </Routes>
    </Router>
  );
}

export default App;