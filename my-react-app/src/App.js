import React from 'react';
import './App.css';

import Header from './components/Header-section/header.jsx';
import Hero from './components/Hero-section/Hero.jsx';
import Option from './components/Option-page/option.jsx'
import Pricing from './components/Pricing-page/Pricing.jsx'
import SignUp from './components/Sign-up/SignUp.jsx'
import Contact from './components/Contact-section/Contact.jsx';
import Footer from './components/Footer-section/Footer.jsx'

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Header />
        <Hero />
        <Option />
        <Pricing />
        <SignUp />
        <Contact />
        <Footer />
      </React.StrictMode>
    </div>
  );
}

export default App;
