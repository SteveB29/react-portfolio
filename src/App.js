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
    About: {
      component: <About />,
      display: 'About Me'
    },
    Project: {
      component: <Project />,
      display: 'My work'
    },
    Contact: {
      component: <Contact />,
      display: 'Contact me'
    }
  };

  return (
    <>
      <Navigation
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <Hero />
      <h2 className='component-header'>{optionSelected[currentCategory].display}</h2>
      {optionSelected[currentCategory].component}
      <Footer />
    </>
  );
}

export default App;
