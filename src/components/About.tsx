import React from 'react';
import { Globe, Code, Lightbulb, Trophy } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Web Excellence',
      description: 'We create exceptional web experiences using cutting-edge technologies that set you apart from the competition.'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Code Mastery',
      description: 'Clean, efficient code that powers your digital vision. We build scalable solutions with modern technologies.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Dream Realization',
      description: 'We transform your boldest ideas into reality, turning concepts into compelling digital experiences.'
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Success Driven',
      description: 'Your success is our mission. We deliver results that drive growth and create lasting impact for your business.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Danndi.co
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a creative tech and design studio passionate about transforming ambitious ideas 
            into extraordinary digital experiences. Our team combines technical expertise with 
            creative vision to help startups, businesses, and innovators thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 border border-gray-100"
            >
              <div className="text-blue-600 mb-6 p-3 bg-blue-50 rounded-xl w-fit">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To empower businesses and innovators with exceptional digital solutions that 
                drive growth, enhance immersive user experiences, and create lasting impact in their respective industries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that great design and technology should work hand in hand to solve 
                real problems and create meaningful, immersive connections between brands and their audiences.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white shadow-2xl border border-blue-500/20">
              <h4 className="text-2xl font-semibold mb-4">Why Choose Danndi.co?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-300 mr-2">✓</span>
                  <span>End-to-end creative and technical solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-300 mr-2">✓</span>
                  <span>Proven track record with digital experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-300 mr-2">✓</span>
                  <span>Cutting-edge technology and collaborative approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-300 mr-2">✓</span>
                  <span>Focus on scalable and future-proof solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;