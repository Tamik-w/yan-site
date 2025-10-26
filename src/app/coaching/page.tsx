'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Clock, Users, Target, Calendar, Phone, Star, Trophy } from 'lucide-react';

export default function CoachingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const coachingOptions = [
    {
      title: "Consultation",
      price: "$200/session",
      duration: "60 minutes",
      description: "Individualized attention with personalized programming and technique analysis",
      features: [
        "Personalized training program",
        "Video analysis and feedback",
        "Nutrition guidance"
      ]
    },
    {
      title: "Online Coaching",
      price: "$200/month",
      duration: "Ongoing",
      description: "Remote coaching with video analysis and programming",
      features: [
        "Custom weekly programming",
        "Regular video and form check analysis",
        "24/7 chat support"
      ]
    }
  ];

  const coaches = [
    {
      name: "Katerina",
      title: "Coach",
      experience: "10+ years",
      credentials: "BSc Psychology, BSc Biology, NSCA Women's Fitness Specialist",
      image: "",
      specialties: ["Women's Fitness", "Pre & Post Natal Training", "Resistance Training"]
    },
    {
      name: "Adrian",
      title: "Coach",
      experience: "5+ years",
      credentials: "Fitness and Health Promotion, NCCP Competition Introduction",
      image: "https://i.pinimg.com/1200x/32/bd/fe/32bdfe5a5e062cb5171d24112398d68a.jpg",
      specialties: ["Weightlifting", "Powerlifting", "Strongman", "Youth Resistance Training"]
    }
  ];

  return (
    <div className="relative min-h-screen md:h-screen overflow-hidden md:overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/facility/fa1-main.jpeg"
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
          {/* <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center mb-8">
              <Trophy className="h-16 w-16 text-green-400 mr-4 animate-pulse" />
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                Professional Coaching
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Get personalized guidance from certified coaches with years of competitive experience. 
              Whether you're a beginner or elite athlete, we'll help you reach your potential.
            </p>
          </div> */}

          {/* Main Content - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Coaching Options */}
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">Choose Your Coaching Style</h2>
              <div className="space-y-6">
                {coachingOptions.map((option, index) => (
                  <div key={index} className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                    <div className="text-center mb-3">
                      <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                      <div className="text-2xl font-bold text-green-400 mb-2">{option.price}</div>
                      <div className="flex items-center justify-center text-gray-300 mb-3">
                        <Clock className="h-4 w-4 mr-2" />
                        {option.duration}
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">{option.description}</p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-200">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center block">
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Coaches */}
            <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h2 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">Meet Our Expert Coaches</h2>
              <div className="space-y-6">
                {coaches.map((coach, index) => (
                  <div key={index} className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        {coach.image && (
                          <img
                            src={coach.image}
                            alt={coach.name}
                            className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">{coach.name}</h3>
                          <div className="text-green-400 font-semibold mb-2">{coach.title}</div>
                          <div className="text-gray-300 mb-4">
                            <div className="flex items-center mb-1">
                              <Users className="h-4 w-4 mr-2" />
                              {coach.experience} experience
                            </div>
                            <div className="text-sm">
                              {coach.credentials}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2">Specialties:</h4>
                            <div className="flex flex-wrap gap-2">
                              {coach.specialties.map((specialty, specialtyIndex) => (
                                <span key={specialtyIndex} className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}