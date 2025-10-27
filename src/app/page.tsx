'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dmytrii Tamurov",
    role: "Elite Athlete",
    content: "Not bad.",
    rating: 5
  },
  {
    id: 2,
    name: "Name 2",
    role: "role 2",
    content: "Some comment",
    rating: 5
  },
  {
    id: 3,
    name: "Name 3",
    role: "role 3",
    content: "Some comment",
    rating: 5
  },

];

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative min-h-screen overflow-hidden md:h-screen md:overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="image-1.jpeg"
          alt="Olympic weightlifting facility"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container-max mobile-safe-area w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen corner-spacing">
            
            {/* Left Section - Main Content */}
            <div className="text-white space-y-8">
              {/* Logo and Title */}
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center mb-6">
                  <div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                      Grassroots Lifting
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-green-600 mt-2"></div>
                  </div>
                </div>
              </div>

              {/* Banner Text */}
              <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  As it should be
                </h2>
                <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Get stronger and learn through coaching that’s honest, practical, and rooted in tradition. Built from the lessons of mentors, the patterns of success, and a community that grows together.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Link 
                  href="/contact" 
                  className="group bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/coaching" 
                  className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Book Consultation
                </Link>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-20 left-10 animate-bounce">
                <div className="w-4 h-4 bg-green-400 rounded-full opacity-60"></div>
              </div>
              <div className="absolute top-40 left-20 animate-bounce delay-1000">
                <div className="w-6 h-6 bg-green-300 rounded-full opacity-40"></div>
              </div>
            </div>

            {/* Right Section - Testimonials */}
            <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">What Our Athletes Say</h3>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <blockquote className="text-lg text-gray-700 italic mb-6">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                        <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                        <div className="text-green-600 text-sm">{testimonials[currentTestimonial].role}</div>
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-green-400' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute bottom-32 right-20 animate-bounce delay-2000">
        <div className="w-3 h-3 bg-green-500 rounded-full opacity-50"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce delay-500">
        <div className="w-5 h-5 bg-green-400 rounded-full opacity-30"></div>
      </div>
    </div>
  );
}