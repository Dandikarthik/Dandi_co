import React from 'react';
import { ArrowRight, Globe, Code, Lightbulb, Trophy, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-3xl transform rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-teal-400/30 rounded-2xl transform -rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-400/20 rounded-full transform animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-400/25 rounded-2xl transform rotate-45 animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8 relative">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm transform hover:scale-110 transition-all duration-300 shadow-2xl border border-white/20">
              <Globe className="h-8 w-8 text-blue-400" />
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm transform hover:scale-110 transition-all duration-300 shadow-2xl border border-white/20">
              <Code className="h-8 w-8 text-green-400" />
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm transform hover:scale-110 transition-all duration-300 shadow-2xl border border-white/20">
              <Lightbulb className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm transform hover:scale-110 transition-all duration-300 shadow-2xl border border-white/20">
              <Trophy className="h-8 w-8 text-purple-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block transform hover:scale-105 transition-transform text-white">Discover.</span>
            <br />
            <span className="inline-block transform hover:scale-105 transition-transform text-white">Approach.</span>
            <br />
            <span className="inline-block transform hover:scale-105 transition-transform text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-300">Launch.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
             Transform  your bold ideas into exceptional digital experiences. 
            From concept to immersive reality, we're your partners in innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/20"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-xl"
            >
              <Globe className="mr-2 h-5 w-5" />
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;