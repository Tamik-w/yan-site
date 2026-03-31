'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Shield, Star, Target, Trophy, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Athletes Trained' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Competitions Won' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Excellence',
      description:
        'We strive for excellence in every aspect of training, from technique to competition preparation.',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Passion',
      description: 'Our love for Olympic weightlifting drives us to share this incredible sport with others.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Safety',
      description:
        'Safety is our top priority. We ensure proper technique and injury prevention in all training.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community',
      description:
        'We build a supportive community where athletes of all levels can thrive and grow together.',
    },
  ];

  const team = [
    {
      name: 'Coach Name 1',
      role: 'Head Coach & Founder',
      experience: '150+ years',
      credentials: 'USAW Level 3, CSCS, MS Exercise Science',
      image: '/image-2.jpg',
      bio: 'Former national team member with 15+ years of coaching experience. Alex has trained athletes from beginners to Olympians.',
      achievements: ['Former National Team Member', 'USAW Level 3 Coach', 'CSCS Certified', 'MS Exercise Science'],
    },
    {
      name: 'Grandpa Trevor',
      role: 'Senior Coach',
      experience: '120+ years',
      credentials: 'USAW Level 2, MS Exercise Science',
      image: '/image-3.jpg',
      bio: 'Specialist in youth development and masters training. Maria brings a unique perspective to coaching athletes of all ages.',
      achievements: ['Youth Development Specialist', 'Masters Training Expert', 'USAW Level 2 Coach', 'Injury Prevention Specialist'],
    },
    {
      name: 'Yan',
      role: 'Technique Specialist',
      experience: '1 year',
      credentials: 'USAW Level 2, Physical Therapist',
      image: '/image-4.jpg',
      bio: 'Physical therapist and movement specialist who focuses on biomechanics and injury prevention in Olympic weightlifting.',
      achievements: ['Physical Therapist', 'And just a good guy'],
    },
  ];

  const timeline = [
    { year: '2008', title: 'Grassroots Lifting Founded', description: 'Started as a small training group with a passion for Olympic weightlifting.' },
    { year: '2012', title: 'First National Qualifier', description: 'Our first athlete qualified for the national championships.' },
    { year: '2015', title: 'Facility Expansion', description: 'Moved to our current 5,000 sq ft facility with state-of-the-art equipment.' },
    { year: '2018', title: 'Youth Program Launch', description: 'Launched our specialized youth development program for athletes 12-17.' },
    { year: '2020', title: 'Online Training', description: 'Expanded to offer online coaching and remote training programs.' },
    { year: '2024', title: 'Community Growth', description: 'Now serving 500+ athletes with comprehensive training programs.' },
  ];

  return (
    <div className="bright-shell">
      <section className="container-max px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="bright-panel p-5 sm:p-6 lg:p-7 reveal-up">
          <div className="text-center">
            <p className="mx-auto mb-2 inline-flex rounded-full border border-[#d9f99d] bg-[#f7fee7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#365314]">
              About
            </p>
            <h1 className="text-4xl font-semibold text-[#0f172a] sm:text-5xl">About Grassroots Lifting</h1>
            <p className="mt-2 text-sm text-[#4b5563] sm:text-base">
              We are passionate about Olympic weightlifting and dedicated to helping athletes of all levels achieve their goals.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="bright-card reveal-up p-4 text-center" style={{ animationDelay: `${index * 90}ms` }}>
                <p className="text-2xl font-bold text-[#3f6212]">{stat.number}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-[#6b7280]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <article className="bright-card reveal-up p-5" style={{ animationDelay: '100ms' }}>
              <h2 className="text-2xl font-semibold text-[#111827]">Our Story</h2>
              <p className="mt-3 text-sm text-[#4b5563]">
                Grassroots Lifting was founded in 2008 by Alex Thompson, a former national team member who wanted to share his passion for Olympic weightlifting with others. What started as a small training group has grown into a comprehensive training facility serving athletes from beginners to elite competitors.
              </p>
              <p className="mt-3 text-sm text-[#4b5563]">
                Our mission is simple: to provide world-class coaching, proven training methods, and a supportive community that helps athletes achieve their goals, whether that is learning proper technique, competing at the national level, or simply getting stronger and more confident.
              </p>
              <p className="mt-3 text-sm text-[#4b5563]">
                Today, we are proud to serve over 500 athletes with programs ranging from youth development to elite competition preparation, all delivered with the same passion and dedication that started our journey.
              </p>
            </article>

            <article className="bright-card reveal-up p-5" style={{ animationDelay: '180ms' }}>
              <h2 className="text-2xl font-semibold text-[#111827]">Our Facility</h2>
              <p className="mt-3 text-sm text-[#4b5563]">
                Our 5 square foot training facility is equipped with everything you need to excel in Olympic weightlifting. From competition-grade platforms to recovery equipment, we have created an environment designed for success.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {['/image-2.jpg', '/image-3.jpg', '/image-4.jpg', '/image-5.jpg'].map((img) => (
                  <Image key={img} src={img} alt="Facility" width={280} height={160} className="h-24 w-full rounded-lg object-cover" />
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[#374151]">
                {[
                  'Competition-grade platforms and equipment',
                  'Video analysis station',
                  'Recovery and mobility area',
                  'Locker rooms and amenities',
                  'Parking and easy access',
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Zap className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-[#65a30d]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <article key={value.title} className="bright-card reveal-up p-4" style={{ animationDelay: `${index * 100 + 180}ms` }}>
                <div className="inline-flex rounded-full bg-[#f3f4f6] p-2 text-[#3f6212]">{value.icon}</div>
                <h3 className="mt-2 text-lg font-semibold text-[#111827]">{value.title}</h3>
                <p className="mt-1 text-sm text-[#4b5563]">{value.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {team.map((member, index) => (
              <article key={member.name} className="bright-card reveal-up overflow-hidden" style={{ animationDelay: `${index * 120 + 220}ms` }}>
                <Image src={member.image} alt={member.name} width={480} height={220} className="h-44 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#111827]">{member.name}</h3>
                  <p className="text-sm font-semibold text-[#3f6212]">{member.role}</p>
                  <p className="mt-1 text-sm text-[#4b5563]">{member.experience} experience</p>
                  <p className="mt-1 text-sm text-[#4b5563]">{member.credentials}</p>
                  <p className="mt-2 text-sm text-[#4b5563]">{member.bio}</p>
                  <ul className="mt-2 space-y-1">
                    {member.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start text-xs text-[#374151]">
                        <Star className="mr-1.5 mt-0.5 h-3.5 w-3.5 shrink-0 text-[#65a30d]" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 bright-card reveal-up p-5" style={{ animationDelay: '420ms' }}>
            <h2 className="text-2xl font-semibold text-[#111827]">Our Journey</h2>
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {timeline.map((event) => (
                <article key={event.year + event.title} className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-3">
                  <p className="text-sm font-bold text-[#3f6212]">{event.year}</p>
                  <p className="text-sm font-semibold text-[#111827]">{event.title}</p>
                  <p className="mt-1 text-xs text-[#4b5563]">{event.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 bright-card reveal-up p-6 text-center" style={{ animationDelay: '500ms' }}>
            <Trophy className="mx-auto h-7 w-7 text-[#65a30d]" />
            <h2 className="mt-2 text-2xl font-semibold text-[#111827]">Ready to Join Our Community?</h2>
            <p className="mt-2 text-sm text-[#4b5563]">
              Become part of the Grassroots Lifting family and start your journey towards strength, technique, and achievement.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link href="/programs" className="inline-flex items-center justify-center rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black">
                View Programs
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#d1d5db] px-5 py-2.5 text-sm font-semibold text-[#111827] transition hover:bg-[#f9fafb]">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}