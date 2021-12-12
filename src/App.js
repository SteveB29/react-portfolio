import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';

function App() {

  const [currentCategory, setCurrentCategory] = useState('About')

  const optionSelected = {
    About: <About />,
    Project: <Project />
  };

  return (
    <>
      <Header
        setCurrentCategory={setCurrentCategory}
      />
      <Hero />
      {optionSelected[currentCategory]}
      <Footer />
    </>
  );
}

export default App;
