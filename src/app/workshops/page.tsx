'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Users, MapPin, CheckCircle, Star, Award, Zap } from 'lucide-react';

export default function WorkshopsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const upcomingWorkshops = [
    {
      id: 1,
      title: "Introduction to Snatch",
      date: "March 15, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Fortis Fitness West",
      instructor: "Coach Adrian",
      price: "$100",
      spots: "8/12 spots filled",
      level: "Beginner",
      description: "Deep dive into snatch technique with video analysis, drills, and personalized feedback.",
      topics: [
        "Proper starting position",
        "First and second pull mechanics",
        "Receiving position",
        "Common mistakes and corrections",
        "Video analysis session"
      ]
    },
    {
      id: 2,
      title: "Introduction to Clean & Jerk",
      date: "March 22, 2024",
      time: "9:00 AM - 1:00 PM",
      location: "Fortis Fitness West",
      instructor: "Coach Adrian",
      price: "$100",
      spots: "6/12 spots filled",
      level: "Beginner",
      description: "Learn the fundamentals of clean and jerk with step-by-step progression.",
      topics: [
        "Clean technique breakdown",
        "Jerk positioning and timing",
        "Footwork and balance",
        "Breathing and bracing",
        "Practice with light weights"
      ]
    }
  ];

  const workshopTypes = [
    {
      title: "Technique Workshops",
      description: "Focus on perfecting your form and movement patterns",
      icon: <Award className="h-8 w-8" />,
      features: ["Video analysis", "Personal feedback", "Drill progression", "Common mistake corrections"]
    },
    {
      title: "Competition Prep",
      description: "Get ready for your next competition with strategic training",
      icon: <Star className="h-8 w-8" />,
      features: ["Strategy planning", "Mental preparation", "Mock competitions", "Peak performance"]
    },
    {
      title: "Youth Programs",
      description: "Age-appropriate training for young athletes",
      icon: <Users className="h-8 w-8" />,
      features: ["Safe progression", "Fun learning", "Basic movements", "Goal setting"]
    },
    {
      title: "Masters Training",
      description: "Specialized programs for athletes 35+",
      icon: <Zap className="h-8 w-8" />,
      features: ["Injury prevention", "Recovery focus", "Modified programming", "Long-term health"]
    }
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
      <div className="relative z-10">
        {/* Hero Section */}
        {/* <section className="min-h-screen flex items-center">
          <div className="container-max mobile-safe-area w-full">
            <div className={`text-center max-w-4xl mx-auto text-white transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-center mb-8">
                <Award className="h-16 w-16 text-green-400 mr-4 animate-pulse" />
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                  Intensive Workshops
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Master your technique, improve your performance, and connect with fellow athletes 
                in our intensive workshop sessions. Small groups ensure personalized attention.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="#upcoming" className="group bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  View Upcoming Workshops
                </Link>
                <Link href="/contact" className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                  Request Custom Workshop
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        {/* Workshop Types */}
        {/* <section className="py-20">
          <div className="container-max px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Workshop Categories</h2>
              <p className="text-xl text-gray-300">Specialized training for every level and goal</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workshopTypes.map((type, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="text-green-400 mb-4 flex justify-center">{type.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Upcoming Workshops */}
        <section id="upcoming" className="py-20">
          <div className="container-max px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Upcoming Workshops</h2>
              <p className="text-xl text-gray-300">Book your spot in our next intensive session</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 corner-spacing">
              {upcomingWorkshops.map((workshop, index) => (
                <div key={workshop.id} className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{workshop.title}</h3>
                        <div className="flex items-center text-green-400 font-semibold">
                          <Star className="h-5 w-5 mr-1" />
                          {workshop.level}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-400">{workshop.price}</div>
                        <div className="text-sm text-gray-400">{workshop.spots}</div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{workshop.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="h-4 w-4 mr-2" />
                        {workshop.date}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 mr-2" />
                        {workshop.time}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="h-4 w-4 mr-2" />
                        {workshop.location}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="h-4 w-4 mr-2" />
                        {workshop.instructor}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {workshop.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center block">
                      Register Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Benefits */}
        {/* <section className="py-20">
          <div className="container-max px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Attend Our Workshops?</h2>
              <p className="text-xl text-gray-300">Intensive learning in a supportive environment</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Users className="h-8 w-8" />, title: "Small Groups", desc: "Maximum 12 participants ensure personalized attention and detailed feedback for every athlete." },
                { icon: <CheckCircle className="h-8 w-8" />, title: "Expert Instruction", desc: "Learn from certified coaches with years of competitive experience and proven teaching methods." },
                { icon: <Star className="h-8 w-8" />, title: "Immediate Results", desc: "Leave with improved technique, new drills, and a clear plan for continued progress." }
              ].map((benefit, index) => (
                <div key={index} className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="bg-green-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-400/30">
                    <div className="text-green-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        {/* <section className="py-20">
          <div className="container-max px-4 text-center">
            <div className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-12 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Improve Your Technique?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our next workshop and take your weightlifting to the next level with expert guidance and personalized feedback.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Register for Workshop
                </Link>
                <Link href="/programs" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  View All Programs
                </Link>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}