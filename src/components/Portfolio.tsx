import React from 'react';
import { ExternalLink, ArrowRight, Globe, Code, Lightbulb, Trophy } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Clothing WebSite',
      category: 'E-commerce',
      description: 'An intuitive online clothing platform offering real-time inventory updates, user-friendly filtering, and seamless checkout for modern shoppers.',
      challenge: 'Complex data visualization with real-time updates',
      impact: '40% increase in user engagement and 60% reduction in support tickets',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Portfolio Showcase',
      category: 'Education',
      description: 'A personalized portfolio website to present skills,projects, and credentials, designed for students and professionals in education and tech.',
      challenge: 'Creating trust and seamless shopping experience for sustainability-focused users',
      impact: '250% increase in mobile conversions and 4.8-star app store rating',
      technologies: ['reactjs','nodejs', 'Firebase', 'Stripe'],
      image: 'https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: ' Startup Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity redesign for a tech startup entering the AI automation space, including logo, guidelines, and marketing materials.',
      challenge: 'Differentiating in a crowded AI market while maintaining approachability',
      impact: '300% increase in brand recognition and successful Series A funding',
      technologies: [ 'Adobe Creative Suite', 'Figma'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'logo design',
      category: 'logo',
      description: 'A modern, professional logo for a healthcare and other sectors also, tailored for trust, compliance, and usability.',
      challenge: 'HIPAA compliance while maintaining excellent user experience',
      impact: '50% reduction in administrative time and 95% user satisfaction',
      technologies: [ 'Vue.js', 'WebGL', 'Python', 'Django', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'ShowRoom Catalog',
      category: 'Catalog',
      description: 'A digital product catalog for all sector field, plannimg tools, Supporting data Visualization, user responsive design.',
      challenge: 'Simplifying complex financial concepts for everyday users',
      impact: 'Successfully validated concept leading to $2M seed funding',
      technologies: ['Three.js', 'Figma', 'WebGL', 'User Testing', 'Financial APIs'],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'CreativeSpace Website',
      category: 'Web Development',
      description: 'A Creative agency portfolio site showcaseing design work with motion effects, smooth navigation and SEO Optimization.',
      challenge: 'Balancing creativity with performance and accessibility',
      impact: '200% increase in qualified leads and industry recognition',
      technologies: [ 'Next.js', 'Framer Motion', 'Vercel'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects .
            This are samplaes of our work that showcase our expertise in creating innovative solutions across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 border border-gray-100"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Globe className="h-6 w-6 text-white/80" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Code className="h-3 w-3 mr-1" />
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Challenge:</span>
                    <p className="text-sm text-gray-700">{project.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Impact:</span>
                    <p className="text-sm text-gray-700">{project.impact}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  <Lightbulb className="mr-1 h-4 w-4" />
                  View Project
                  <ExternalLink className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;