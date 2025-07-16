import React from 'react';
import { Globe, Code, Lightbulb, Trophy, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              
              <h3 className="text-2xl font-bold">Danndi.co</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Creative tech and design studio helping businesses transform their ideas 
              into exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors" title="Web Excellence">
                <Globe className="h-5 w-5" />
              </div>
              <div className="p-2 bg-green-600 rounded-xl hover:bg-green-700 transition-colors" title="Code Mastery">
                <Code className="h-5 w-5" />
              </div>
              <div className="p-2 bg-yellow-600 rounded-xl hover:bg-yellow-700 transition-colors" title="Dream Realization">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div className="p-2 bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors" title="Success Driven">
                <Trophy className="h-5 w-5" />
              </div>
              <a 
                href="https://www.instagram.com/danndi.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-pink-600 rounded-xl hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:dandi.co.inn@gmail.com"
                className="p-2 bg-green-600 rounded-xl hover:bg-green-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Brand Identity</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Product Prototyping</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="mailto:dandi.co.inn@gmail.com" className="hover:text-white transition-colors">dandi.co.inn@gmail.com</a></li>
              <li><a href="https://www.instagram.com/danndi.co/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@danndi.co</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Danndi.co. All rights reserved. Crafted with passion and innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;