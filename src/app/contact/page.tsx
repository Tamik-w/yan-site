'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setErrors({});
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
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
      } else {
        console.error('Failed to send email:', result.error);
        setErrors({ submit: result.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrors({ submit: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsLoading(false);
    }
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
    <div className="relative min-h-screen md:h-screen overflow-hidden md:overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="image-1.jpeg"
          alt="Olympic weightlifting facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-max mobile-safe-area w-full">
          {/* Hero Section */}
          <div className={`text-center mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="h-12 w-12 text-green-400 mr-4 animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                Get In Touch
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Ready to start your Olympic weightlifting journey? Contact us today!
            </p>
          </div>

          {/* Main Content - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <p className="text-gray-300 mb-6">
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
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm ${
                            errors.name ? 'border-red-400' : 'border-white/20'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
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
                          className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm ${
                            errors.email ? 'border-red-400' : 'border-white/20'
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm ${
                            errors.phone ? 'border-red-400' : 'border-white/20'
                          }`}
                          placeholder="(555) 123-4567"
                        />
                        {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
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
                        rows={4}
                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm ${
                          errors.message ? 'border-red-400' : 'border-white/20'
                        }`}
                        placeholder="Tell us about your goals, experience level, or any questions you have..."
                      />
                      {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {errors.submit && (
                      <div className="bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg text-sm">
                        {errors.submit}
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className={`space-y-4 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {/* Interactive Map */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4">
                <h3 className="text-lg font-bold text-white mb-4">Find Us</h3>
                <div className="h-48 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-lg flex items-center justify-center border border-green-400/30">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">Interactive Map</p>
                    <p className="text-gray-300 text-xs">123 Gym Street, Fitness City</p>
                    <button className="mt-2 bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded transition-colors">
                      View on Google Maps
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4">
                <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      <div className="bg-green-400/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 border border-green-400/30">
                        <div className="text-green-400 text-sm">{info.icon}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{info.title}</div>
                        <div className="text-xs text-gray-300">{info.details}</div>
                        <div className="text-xs text-gray-400">{info.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
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
                    href="mailto:grassrootsweightlifting@gmail.com"
                    className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="h-6 w-6 text-green-400 mr-4" />
                    <div>
                      <div className="font-semibold text-white">Email Us</div>
                      <div className="text-sm text-gray-300">grassrootsweightlifting@gmail.com</div>
                    </div>
                  </a>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}