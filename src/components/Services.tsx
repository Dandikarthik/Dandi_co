import React from 'react';
import { Globe, Code, Lightbulb, Trophy } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Brand Identity',
      description: 'Comprehensive brand development from logo design to complete visual identity systems that captivate your audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy', 'Marketing Materials']
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetic appeal with intuitive functionality for exceptional experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Interface Design', 'Usability Testing']
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Full-stack web development services delivering fast, secure, and scalable applications using cutting-edge technologies.',
      features: ['Frontend Development', 'Backend Development', 'API Development', 'Performance Optimization', 'Maintenance & Support']
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      title: 'Product Prototyping',
      description: 'Rapid prototyping services to validate ideas, test concepts, and iterate quickly before full-scale development.',
      features: ['Concept Validation', 'Interactive Prototypes', 'User Testing', 'Technical Feasibility', 'Market Research']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to your unique needs, 
            from initial concept to final implementation and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-100"
            >
              <div className="flex items-start mb-6">
                <div className="text-blue-600 mr-4 p-3 bg-blue-50 rounded-xl">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-3 shadow-sm"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl border border-blue-500/20">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Ideas into Reality?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our services can help bring your vision to life.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Trophy className="mr-2 h-5 w-5" />
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;