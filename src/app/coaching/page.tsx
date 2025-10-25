'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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
      credentials: "BSc Psychology,  BSc Biology, NSCA Women's Fitness Specialist",
      image: "",
      specialties: ["Women's Fitness", "Pre & Post Natal Training", "Resistance Training"]
    },
    {
      name: "Adrian",
      title: "Coach",
      experience: "5+ years",
      credentials: "Fitness and Health Promotion, NCCP Competition Introduction",
      image: "https://i.pinimg.com/1200x/32/bd/fe/32bdfe5a5e062cb5171d24112398d68a.jpg",
      specialties: ["Weightlifting", "Powerlifting", "Strongman", "Youth Resistance Training,"]
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg')"
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
                <Trophy className="h-16 w-16 text-green-400 mr-4 animate-pulse" />
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                  Professional Coaching
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Get personalized guidance from certified coaches with years of competitive experience. 
                Whether you're a beginner or elite athlete, we'll help you reach your potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="group bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Link>
                <Link href="tel:+15551234567" className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        {/* Coaching Options */}
        <section className="py-20">
          <div className="container-max px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Choose Your Coaching Style</h2>
              <p className="text-xl text-gray-300">Flexible options to fit your schedule and goals</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {coachingOptions.map((option, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                    <div className="text-3xl font-bold text-green-400 mb-2">{option.price}</div>
                    <div className="flex items-center justify-center text-gray-300 mb-4">
                      <Clock className="h-5 w-5 mr-2" />
                      {option.duration}
                    </div>
                    <p className="text-gray-300">{option.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-200">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
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
        </section>

        {/* Meet Our Coaches */}
        <section className="py-20">
          <div className="container-max px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Expert Coaches</h2>
              <p className="text-xl text-gray-300">Certified professionals with proven track records</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coaches.map((coach, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{coach.name}</h3>
                    <div className="text-green-400 font-semibold mb-2">{coach.title}</div>
                    <div className="text-gray-300 mb-4">
                      <div className="flex items-center mb-1">
                        <Users className="h-4 w-4 mr-2" />
                        {coach.experience} experience
                      </div>
                      <div className="flex items-center">
                        <Target className="h-4 w-4 mr-2" />
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
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        {/* <section className="py-20">
          <div className="container-max px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
              <p className="text-xl text-gray-300">Simple steps to get started with your coaching journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Initial Consultation", desc: "We assess your current level, goals, and create a personalized plan." },
                { step: "2", title: "Program Design", desc: "Custom training program tailored to your schedule and objectives." },
                { step: "3", title: "Training Sessions", desc: "Regular coaching sessions with technique analysis and progress tracking." },
                { step: "4", title: "Continuous Improvement", desc: "Ongoing support, program adjustments, and goal achievement." }
              ].map((item, index) => (
                <div key={index} className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="bg-green-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-400/30">
                    <span className="text-2xl font-bold text-green-400">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        {/* <section className="py-20">
          <div className="container-max px-4 text-center">
            <div className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-12 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Coaching Journey?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your free consultation today and take the first step towards achieving your weightlifting goals.
              </p>
              <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}