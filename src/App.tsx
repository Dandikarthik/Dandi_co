import React from 'react';
import { useSignupPopup } from './hooks/useSignupPopup';
import SignupPopup from './components/SignupPopup';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { isPopupOpen, closePopup } = useSignupPopup();

  return (
    <div className="min-h-screen bg-white">
      <SignupPopup isOpen={isPopupOpen} onClose={closePopup} />
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;