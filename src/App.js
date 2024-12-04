import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import Rooms from './pages/Rooms';
import Dining from './pages/Dinning';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';

import herobg2 from './images/herobg2.jpg';
import Breathtakingviews from './components/Breathtakingviews';
import Roomslider from './components/Roomslider';
import Videosec from './components/Videosec';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar isScrolled={isScrolled} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Breathtakingviews />
              <Roomslider />
              <Videosec />
              
            </>
          } />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

