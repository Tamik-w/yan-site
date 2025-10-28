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
      description: "A 1-on-1 personalized consultation call to assess your goals, conflicting commitments and obstacles, and map out the best path forward.",
      features: [
        "Comes with a bespoke training program",
        "In session video analysis and feedback",
        "Nutrition and lifestyle guidance",
        "Best suited for individuals that seek to have a framework and whose preference is to be more independent in their pursuit"
      ]
    },
    {
      title: "Online Coaching",
      price: "$200/month",
      duration: "Ongoing",
      description: "Remote Coaching for individuals requiring regular check-ins, more flexibility in their structure, with constant support.",
      features: [
        "Adjustable weekly training program",
        "Weekly video analysis and feedback",
        "Nutrition and lifestyle guidance",
        "Best suited for individuals that require more of a holistic approach to their goals that may require continuous revision as training proceeds"
      ]
    }
  ];

  const coaches = [
    {
      name: "Katerina",
      title: "Coach",
      experience: "10+ years",
      credentials: "BSc Psychology, BSc Biology, NSCA Women's Fitness Specialist",
      image: "image-3.jpg",
      specialties: ["Women's Fitness", "Pre & Post Natal Training", "Resistance Training"]
    },
    {
      name: "Adrian",
      title: "Coach",
      experience: "5+ years",
      credentials: "Fitness and Health Promotion, NCCP Competition Introduction",
      image: "image-2.jpg",
      specialties: ["Weightlifting", "Powerlifting", "Strongman", "Youth Resistance Training"]
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden lg:h-screen lg:overflow-hidden">
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
        <div className="container-max w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 pb-24 sm:pb-28 md:pb-32 lg:pb-36 xl:pb-40">
          {/* Main Content - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
            {/* Left Side - Coaching Options */}
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">Choose Your Coaching Style</h2>
              <div className="space-y-3">
                {coachingOptions.map((option, index) => (
                  <div key={index} className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2.5 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                    <div className="text-center mb-1.5">
                      <h3 className="text-base font-bold text-white mb-1">{option.title}</h3>
                      <div className="text-lg font-bold text-green-400 mb-1">{option.price}</div>
                      <div className="flex items-center justify-center text-gray-300 mb-1.5 text-xs">
                        <Clock className="h-2.5 w-2.5 mr-1" />
                        {option.duration}
                      </div>
                      <p className="text-gray-300 mb-1.5 text-xs">{option.description}</p>
                    </div>

                    <ul className="space-y-0.5 mb-3">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-200 text-xs">
                          <CheckCircle className="h-2.5 w-2.5 text-green-400 mr-1.5 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-center block text-xs">
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Coaches */}
            <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h2 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">Meet Our Expert Coaches</h2>
              <div className="space-y-4">
                {coaches.map((coach, index) => (
                  <div key={index} className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                    <div className="p-4">
                      <div className="flex items-start space-x-3">
                        {coach.image && (
                          <div className="relative flex-shrink-0">
                            <img
                              src={coach.image}
                              alt={coach.name}
                              className="w-16 h-16 rounded-full object-cover"
                              style={{
                                transform: 'scale(1.2)',
                                objectPosition: 'center'
                              }}
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">{coach.name}</h3>
                          <div className="text-green-400 font-semibold mb-1 text-sm">{coach.title}</div>
                          <div className="text-gray-300 mb-3">
                            <div className="flex items-center mb-1 text-sm">
                              <Users className="h-3 w-3 mr-1" />
                              {coach.experience} experience
                            </div>
                            <div className="text-xs">
                              {coach.credentials}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1 text-sm">Specialties:</h4>
                            <div className="flex flex-wrap gap-1">
                              {coach.specialties.map((specialty, specialtyIndex) => (
                                <span key={specialtyIndex} className="bg-green-400/20 text-green-300 px-2 py-1 rounded-full text-xs border border-green-400/30">
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