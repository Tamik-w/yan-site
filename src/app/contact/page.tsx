'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "grassrootsweightlifting@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "123 Gym Street, Fitness City, FC 12345",
      description: "Visit our training facility"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: "Mon-Fri: 6AM-10PM, Sat-Sun: 8AM-8PM",
      description: "We're here when you need us"
    }
  ];

  const services = [
    "Personal Coaching",
    "Group Training",
    "Workshops",
    "Programs",
    "Online Training",
    "Competition Prep",
    "Youth Programs",
    "Masters Training"
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/facility/fa1-main.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        {/* <section className="min-h-screen flex items-center">
          <div className="container-max px-4 w-full">
            <div className={`text-center max-w-4xl mx-auto text-white transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-center mb-8">
                <MessageCircle className="h-16 w-16 text-green-400 mr-4 animate-pulse" />
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                  Get In Touch
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Ready to start your Olympic weightlifting journey? Have questions about our programs? 
                We're here to help you achieve your goals. Contact us today!
              </p>
            </div>
          </div>
        </section> */}

        {/* Contact Information */}
        {/* <section className="py-20">
          <div className="container-max px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-xl text-gray-300">Multiple ways to reach us</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="bg-green-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <div className="text-green-400">{info.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-green-400 font-semibold mb-2">{info.details}</p>
                  <p className="text-gray-300 text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Contact Form and Map */}
        <section className="py-20">
          <div className="container-max px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                  <p className="text-gray-300 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                        <CheckCircle className="h-8 w-8 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-300">We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                            Service Interest
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm"
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service} className="bg-gray-800">{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm"
                          placeholder="Tell us about your goals, experience level, or any questions you have..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Map and Additional Info */}
              <div className={`space-y-8 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                {/* Map Placeholder */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-green-400/20 to-green-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-green-400 mx-auto mb-4" />
                      <p className="text-white font-semibold">Interactive Map</p>
                      <p className="text-sm text-gray-300">123 Gym Street, Fitness City</p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+15551234567"
                      className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <Phone className="h-6 w-6 text-green-400 mr-4" />
                      <div>
                        <div className="font-semibold text-white">Call Now</div>
                        <div className="text-sm text-gray-300">+1 (555) 123-4567</div>
                      </div>
                    </a>
                    
                    <a
                      href="mailto:info@grassrootslifting.com"
                      className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <Mail className="h-6 w-6 text-green-400 mr-4" />
                      <div>
                        <div className="font-semibold text-white">Email Us</div>
                        <div className="text-sm text-gray-300">info@grassrootslifting.com</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Do I need experience to start?</h4>
                      <p className="text-gray-300 text-sm">No! We have programs for complete beginners to elite athletes.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">What should I bring to my first session?</h4>
                      <p className="text-gray-300 text-sm">Just bring comfortable workout clothes and a water bottle. We provide all equipment.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Do you offer trial sessions?</h4>
                      <p className="text-gray-300 text-sm">Yes! We offer a free consultation and trial session for new athletes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-20">
          <div className="container-max px-4 text-center">
            <div className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-12 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Don't wait to start your Olympic weightlifting journey. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
                <a
                  href="mailto:info@grassrootslifting.com"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}