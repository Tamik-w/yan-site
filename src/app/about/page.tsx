'use client';

import React, { useEffect, useState } from 'react';
import { Trophy, Users, Target, Award, Star, Heart, Shield, Zap } from 'lucide-react';

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { number: "500+", label: "Athletes Trained" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Competitions Won" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of training, from technique to competition preparation."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "Our love for Olympic weightlifting drives us to share this incredible sport with others."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety",
      description: "Safety is our top priority. We ensure proper technique and injury prevention in all training."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "We build a supportive community where athletes of all levels can thrive and grow together."
    }
  ];

  const team = [
    {
      name: "Coach Name 1",
      role: "Head Coach & Founder",
      experience: "150+ years",
      credentials: "USAW Level 3, CSCS, MS Exercise Science",
      image: "",
      bio: "Former national team member with 15+ years of coaching experience. Alex has trained athletes from beginners to Olympians.",
      achievements: ["Former National Team Member", "USAW Level 3 Coach", "CSCS Certified", "MS Exercise Science"]
    },
    {
      name: "Grandpa Trevor",
      role: "Senior Coach",
      experience: "120+ years",
      credentials: "USAW Level 2, MS Exercise Science",
      image: "",
      bio: "Specialist in youth development and masters training. Maria brings a unique perspective to coaching athletes of all ages.",
      achievements: ["Youth Development Specialist", "Masters Training Expert", "USAW Level 2 Coach", "Injury Prevention Specialist"]
    },
    {
      name: "Yan",
      role: "Technique Specialist",
      experience: "1 year",
      credentials: "USAW Level 2, Physical Therapist",
      image: "",
      bio: "Physical therapist and movement specialist who focuses on biomechanics and injury prevention in Olympic weightlifting.",
      achievements: ["Physical Therapist", "And just a good guy"]
    }
  ];

  const timeline = [
    {
      year: "2008",
      title: "Grassroots Lifting Founded",
      description: "Started as a small training group with a passion for Olympic weightlifting."
    },
    {
      year: "2012",
      title: "First National Qualifier",
      description: "Our first athlete qualified for the national championships."
    },
    {
      year: "2015",
      title: "Facility Expansion",
      description: "Moved to our current 5,000 sq ft facility with state-of-the-art equipment."
    },
    {
      year: "2018",
      title: "Youth Program Launch",
      description: "Launched our specialized youth development program for athletes 12-17."
    },
    {
      year: "2020",
      title: "Online Training",
      description: "Expanded to offer online coaching and remote training programs."
    },
    {
      year: "2024",
      title: "Community Growth",
      description: "Now serving 500+ athletes with comprehensive training programs."
    }
  ];

  return (
    <div className="relative min-h-screen md:h-screen overflow-hidden md:overflow-hidden">
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
        <section className="min-h-screen flex items-center">
          <div className="container-max mobile-safe-area w-full">
            <div className={`text-center max-w-4xl mx-auto text-white transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-center mb-8">
                <Trophy className="h-16 w-16 text-green-400 mr-4 animate-pulse" />
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                  About Grassroots Lifting
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                We're passionate about Olympic weightlifting and dedicated to helping athletes of all levels 
                achieve their goals through expert coaching, proven programs, and a supportive community.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container-max px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container-max px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Grassroots Lifting was founded in 2008 by Alex Thompson, a former national team member who 
                  wanted to share his passion for Olympic weightlifting with others. What started as a 
                  small training group has grown into a comprehensive training facility serving athletes 
                  from beginners to elite competitors.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Our mission is simple: to provide world-class coaching, proven training methods, and 
                  a supportive community that helps athletes achieve their goals, whether that's learning 
                  proper technique, competing at the national level, or simply getting stronger and more confident.
                </p>
                <p className="text-lg text-gray-300">
                  Today, we're proud to serve over 500 athletes with programs ranging from youth development 
                  to elite competition preparation, all delivered with the same passion and dedication that 
                  started our journey.
                </p>
              </div>
              <div className={`relative transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center"
                  alt="Olympic weightlifting training"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Trophy className="h-8 w-8" />
                    <div>
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container-max px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="bg-green-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-400/30">
                    <div className="text-green-400">{value.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-20">
          <div className="container-max px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300">Certified professionals with years of experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <div className="text-green-400 font-semibold mb-2">{member.role}</div>
                    <div className="text-gray-300 mb-4">
                      <div className="flex items-center mb-1">
                        <Users className="h-4 w-4 mr-2" />
                        {member.experience} experience
                      </div>
                      <div className="flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        {member.credentials}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{member.bio}</p>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Credentials:</h4>
                      <p className="text-sm text-gray-400 mb-3">{member.credentials}</p>
                      <div className="space-y-1">
                        {member.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center text-sm text-gray-300">
                            <Star className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container-max px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-xl text-gray-300">Key milestones in our growth and development</p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-400/30"></div>
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg">
                        <div className="text-2xl font-bold text-green-400 mb-2">{event.year}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-gray-300">{event.description}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Facility */}
        <section className="py-20">
          <div className="container-max px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-1000 delay-1300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Facility</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Our 5 square foot training facility is equipped with everything you need to excel 
                  in Olympic weightlifting. From competition-grade platforms to recovery equipment, 
                  we've created an environment designed for success.
                </p>
                <div className="space-y-4">
                  {[
                    "Competition-grade platforms and equipment",
                    "Video analysis station",
                    "Recovery and mobility area",
                    "Locker rooms and amenities",
                    "Parking and easy access"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Zap className="h-6 w-6 text-green-400 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <img
                  src=""
                  alt="Training facility"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src=""
                  alt="Weightlifting equipment"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src=""
                  alt="Training session"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src=""
                  alt="Recovery area"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-max px-4 text-center">
            <div className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-12 transition-all duration-1000 delay-1700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Become part of the Grassroots Lifting family and start your journey towards strength, technique, and achievement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/programs"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  View Programs
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}