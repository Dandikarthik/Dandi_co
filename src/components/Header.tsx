import React, { useState, useEffect } from 'react';
import { Menu, X, UserPlus } from 'lucide-react';
import { useSignupPopup } from '../hooks/useSignupPopup';

const Header = () => {
  const { openPopup } = useSignupPopup();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <img src="/dandi.png" alt="Danndi.co" className="h-14 w-auto" />
              <span className="text-2xl font-bold text-blue-700"></span>
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['About', 'Services', 'Work', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={openPopup}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <UserPlus className="mr-1 h-4 w-4" />
              Join Us
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-700 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {['About', 'Services', 'Work', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                openPopup();
              }}
              className="block w-full text-left px-3 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors font-medium"
            >
              Join Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;