'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Clock, Users, Target, Calendar, Star, Trophy, Zap, Award } from 'lucide-react';

export default function ProgramsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const programs = [
    {
      id: 1,
      title: "Beginner's Foundation",
      duration: "12 weeks",
      price: "$299",
      level: "Beginner",
      description: "Perfect introduction to Olympic weightlifting with focus on safety, technique, and basic movements.",
      features: [
        "Learn proper snatch and clean & jerk technique",
        "Build strength and mobility",
        "Weekly technique sessions",
        "Nutrition guidance",
        "Progress tracking",
        "Access to online resources"
      ],
      schedule: "3 sessions/week",
      maxParticipants: 8,
      nextStart: "March 1, 2024"
    },
    {
      id: 2,
      title: "Intermediate Development",
      duration: "16 weeks",
      price: "$399",
      level: "Intermediate",
      description: "Advance your technique and increase your strength with structured programming and competition prep.",
      features: [
        "Advanced technique refinement",
        "Strength and power development",
        "Competition preparation",
        "Video analysis sessions",
        "Personalized programming",
        "Access to competition team"
      ],
      schedule: "4 sessions/week",
      maxParticipants: 6,
      nextStart: "March 8, 2024"
    },
    {
      id: 3,
      title: "Elite Performance",
      duration: "20 weeks",
      price: "$599",
      level: "Advanced",
      description: "For serious competitors aiming for national and international competitions.",
      features: [
        "Elite-level programming",
        "Competition strategy development",
        "Mental performance coaching",
        "Recovery and nutrition optimization",
        "Competition travel support",
        "Sponsorship opportunities"
      ],
      schedule: "5-6 sessions/week",
      maxParticipants: 4,
      nextStart: "March 15, 2024"
    },
    {
      id: 4,
      title: "Youth Development (Ages 12-17)",
      duration: "10 weeks",
      price: "$199",
      level: "All Levels",
      description: "Age-appropriate training focusing on movement quality, fun, and long-term development.",
      features: [
        "Safe progression for young athletes",
        "Movement quality focus",
        "Fun and engaging sessions",
        "Parent education sessions",
        "Competition opportunities",
        "Scholarship program available"
      ],
      schedule: "2 sessions/week",
      maxParticipants: 12,
      nextStart: "March 5, 2024"
    },
    {
      id: 5,
      title: "Masters Program (35+)",
      duration: "14 weeks",
      price: "$349",
      level: "All Levels",
      description: "Specialized program for mature athletes focusing on longevity, injury prevention, and sustainable progress.",
      features: [
        "Injury prevention focus",
        "Recovery optimization",
        "Modified programming",
        "Joint mobility work",
        "Nutrition for aging athletes",
        "Lifetime fitness approach"
      ],
      schedule: "3 sessions/week",
      maxParticipants: 10,
      nextStart: "March 12, 2024"
    },
    {
      id: 6,
      title: "Online Training Program",
      duration: "Ongoing",
      price: "$99/month",
      level: "All Levels",
      description: "Remote training with video analysis, programming, and support for athletes anywhere in the world.",
      features: [
        "Custom programming",
        "Weekly video analysis",
        "Form check submissions",
        "Nutrition consultation",
        "24/7 chat support",
        "Monthly group calls"
      ],
      schedule: "Flexible",
      maxParticipants: "Unlimited",
      nextStart: "Anytime"
    }
  ];

  const programTypes = [
    {
      title: "In-Person Training",
      description: "Train at our world-class facility with expert coaches",
      icon: <Users className="h-8 w-8" />,
      benefits: ["Direct coaching", "Equipment access", "Community support", "Immediate feedback"]
    },
    {
      title: "Online Programs",
      description: "Flexible training from anywhere with video analysis",
      icon: <Zap className="h-8 w-8" />,
      benefits: ["Flexible schedule", "Video analysis", "Remote support", "Cost effective"]
    },
    {
      title: "Competition Prep",
      description: "Specialized training for competitive athletes",
      icon: <Trophy className="h-8 w-8" />,
      benefits: ["Competition focus", "Strategy development", "Peak performance", "Travel support"]
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
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="container-max mobile-safe-area w-full">
            <div className={`text-center max-w-4xl mx-auto text-white transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-center mb-8">
                <Target className="h-16 w-16 text-green-400 mr-4 animate-pulse" />
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                  Training Programs
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Structured programs designed for every level, from complete beginners to elite competitors. 
                Choose the program that fits your goals, schedule, and experience level.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="#programs" className="group bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center">
                  <Target className="mr-2 h-5 w-5" />
                  View All Programs
                </Link>
                <Link href="/contact" className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Program Types */}
        <section className="py-20">
          <div className="container-max px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Training Options</h2>
              <p className="text-xl text-gray-300">Flexible programs to fit your lifestyle and goals</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programTypes.map((type, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="text-green-400 mb-4 flex justify-center">{type.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section id="programs" className="py-20">
          <div className="container-max px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Training Programs</h2>
              <p className="text-xl text-gray-300">Choose the program that matches your level and goals</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={program.id} className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                        <div className="flex items-center text-green-400 font-semibold">
                          <Star className="h-5 w-5 mr-1" />
                          {program.level}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-400">{program.price}</div>
                        <div className="text-sm text-gray-400">{program.duration}</div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{program.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 mr-2" />
                        {program.schedule}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="h-4 w-4 mr-2" />
                        Max {program.maxParticipants}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Calendar className="h-4 w-4 mr-2" />
                        Starts {program.nextStart}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Target className="h-4 w-4 mr-2" />
                        {program.duration}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Program Includes:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center block">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container-max px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Program Success Stories</h2>
              <p className="text-xl text-gray-300">Real results from our athletes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { stat: "+45kg", label: "Total Increase", quote: "The Beginner's Foundation program helped me go from never touching a barbell to competing in my first meet in just 6 months!", author: "Sarah M." },
                { stat: "Nationals", label: "Qualified", quote: "The Elite Performance program took me from local competitions to qualifying for nationals. The programming and support were incredible.", author: "Mike R." },
                { stat: "Age 52", label: "Masters Champion", quote: "At 52, I thought my competitive days were over. The Masters Program proved me wrong - I'm stronger than ever!", author: "David L." }
              ].map((story, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-green-400 mb-2">{story.stat}</div>
                    <div className="text-gray-300">{story.label}</div>
                  </div>
                  <p className="text-gray-300 italic mb-4">{story.quote}</p>
                  <div className="font-semibold text-white">- {story.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-max px-4 text-center">
            <div className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-12 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of athletes who have transformed their strength and technique with our proven programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Enroll Today
                </Link>
                <Link href="/coaching" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}