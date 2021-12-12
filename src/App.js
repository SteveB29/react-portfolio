import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {

  const [currentCategory, setCurrentCategory] = useState('About')

  const optionSelected = {
    About: <About />,
    Project: <Project />,
    Contact: <Contact />
  };

  return (
    <>
      <Navigation
        setCurrentCategory={setCurrentCategory}
      />
      <Hero />
      {optionSelected[currentCategory]}
      <Footer />
    </>
  );
}

export default App;
