import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram, Trophy } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your ideas into exceptional digital experiences? 
            Let's discuss your project and explore how we can help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">dandi.co.inn@gmail.com</p>
                  <p className="text-gray-600">For all inquiries and projects</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-pink-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Instagram</h4>
                  <a href="https://www.instagram.com/danndi.co/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 transition-colors">
                    @danndi.co
                  </a>
                  <p className="text-gray-600">Follow our latest Update's</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 9553466446</p>
                  <p className="text-gray-600">Available Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">India</p>
                  <p className="text-gray-600">Hyderabad</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl text-white shadow-2xl border border-blue-500/20">
              <div className="flex items-center mb-2">
                <Trophy className="h-6 w-6 mr-2" />
                <h4 className="text-xl font-semibold">Ready to Start Your Journey?</h4>
              </div>
              <p className="text-blue-100 mb-4">
                Join innovative companies who trust Danndi.co to bring their visions to life.
              </p>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm">Free initial consultation</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <Trophy className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Send us a Message</h3>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="karthik"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="sai"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="karthik@gmail.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="brand-identity">Brand Identity</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="product-prototyping">Product Prototyping</option>
                    <option value="full-project">Full Project</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;