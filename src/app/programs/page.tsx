'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, CheckCircle, Clock, Target, Users, Zap } from 'lucide-react';

export default function ProgramsPage() {
  const programs = [
    {
      id: 1,
      title: "Beginner's Foundation",
      duration: '12 weeks',
      price: '$299',
      level: 'Beginner',
      description: 'Perfect introduction to Olympic weightlifting with focus on safety, technique, and basic movements.',
      features: [
        'Learn proper snatch and clean & jerk technique',
        'Build strength and mobility',
        'Weekly technique sessions',
        'Nutrition guidance',
        'Progress tracking',
        'Access to online resources',
      ],
      schedule: '3 sessions/week',
      maxParticipants: 8,
      nextStart: 'March 1, 2024',
    },
    {
      id: 2,
      title: 'Intermediate Development',
      duration: '16 weeks',
      price: '$399',
      level: 'Intermediate',
      description:
        'Advance your technique and increase your strength with structured programming and competition prep.',
      features: [
        'Advanced technique refinement',
        'Strength and power development',
        'Competition preparation',
        'Video analysis sessions',
        'Personalized programming',
        'Access to competition team',
      ],
      schedule: '4 sessions/week',
      maxParticipants: 6,
      nextStart: 'March 8, 2024',
    },
    {
      id: 3,
      title: 'Elite Performance',
      duration: '20 weeks',
      price: '$599',
      level: 'Advanced',
      description: 'For serious competitors aiming for national and international competitions.',
      features: [
        'Elite-level programming',
        'Competition strategy development',
        'Mental performance coaching',
        'Recovery and nutrition optimization',
        'Competition travel support',
        'Sponsorship opportunities',
      ],
      schedule: '5-6 sessions/week',
      maxParticipants: 4,
      nextStart: 'March 15, 2024',
    },
    {
      id: 4,
      title: 'Youth Development (Ages 12-17)',
      duration: '10 weeks',
      price: '$199',
      level: 'All Levels',
      description: 'Age-appropriate training focusing on movement quality, fun, and long-term development.',
      features: [
        'Safe progression for young athletes',
        'Movement quality focus',
        'Fun and engaging sessions',
        'Parent education sessions',
        'Competition opportunities',
        'Scholarship program available',
      ],
      schedule: '2 sessions/week',
      maxParticipants: 12,
      nextStart: 'March 5, 2024',
    },
    {
      id: 5,
      title: 'Masters Program (35+)',
      duration: '14 weeks',
      price: '$349',
      level: 'All Levels',
      description:
        'Specialized program for mature athletes focusing on longevity, injury prevention, and sustainable progress.',
      features: [
        'Injury prevention focus',
        'Recovery optimization',
        'Modified programming',
        'Joint mobility work',
        'Nutrition for aging athletes',
        'Lifetime fitness approach',
      ],
      schedule: '3 sessions/week',
      maxParticipants: 10,
      nextStart: 'March 12, 2024',
    },
    {
      id: 6,
      title: 'Online Training Program',
      duration: 'Ongoing',
      price: '$99/month',
      level: 'All Levels',
      description:
        'Remote training with video analysis, programming, and support for athletes anywhere in the world.',
      features: [
        'Custom programming',
        'Weekly video analysis',
        'Form check submissions',
        'Nutrition consultation',
        '24/7 chat support',
        'Monthly group calls',
      ],
      schedule: 'Flexible',
      maxParticipants: 'Unlimited',
      nextStart: 'Anytime',
    },
  ];

  return (
    <div className="bright-shell">
      <section className="container-max px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="bright-panel p-5 sm:p-6 lg:p-7 reveal-up">
          <div className="text-center">
            <p className="mx-auto mb-2 inline-flex rounded-full border border-[#d9f99d] bg-[#f7fee7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#365314]">
              Programs
            </p>
            <h1 className="text-4xl font-semibold text-[#0f172a] sm:text-5xl">Training Programs</h1>
            <p className="mt-2 text-sm text-[#4b5563] sm:text-base">
              Structured programs designed for every level, from complete beginners to elite competitors.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {programs.map((program, index) => (
              <article key={program.id} className="bright-card reveal-up p-5" style={{ animationDelay: `${index * 70}ms` }}>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-[#111827]">{program.title}</h2>
                    <p className="text-sm font-semibold text-[#3f6212]">{program.level}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#3f6212]">{program.price}</p>
                    <p className="text-xs text-[#6b7280]">{program.duration}</p>
                  </div>
                </div>

                <p className="text-sm text-[#4b5563]">{program.description}</p>

                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-[#4b5563]">
                  <p className="flex items-center"><Clock className="mr-1 h-3.5 w-3.5" />{program.schedule}</p>
                  <p className="flex items-center"><Users className="mr-1 h-3.5 w-3.5" />Max {program.maxParticipants}</p>
                  <p className="flex items-center"><Calendar className="mr-1 h-3.5 w-3.5" />{program.nextStart}</p>
                  <p className="flex items-center"><Target className="mr-1 h-3.5 w-3.5" />{program.duration}</p>
                </div>

                <ul className="mt-3 space-y-1.5">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start text-xs text-[#374151]">
                      <CheckCircle className="mr-1.5 mt-0.5 h-3.5 w-3.5 shrink-0 text-[#65a30d]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black">
                  Enroll Now
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8 bright-card reveal-up p-6 text-center" style={{ animationDelay: '320ms' }}>
            <Zap className="mx-auto h-7 w-7 text-[#65a30d]" />
            <h2 className="mt-2 text-2xl font-semibold text-[#111827]">Ready to Start Your Journey?</h2>
            <p className="mt-2 text-sm text-[#4b5563]">
              Join hundreds of athletes who have transformed their strength and technique with our proven programs.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black">
                Enroll Today
              </Link>
              <Link href="/coaching" className="inline-flex items-center justify-center rounded-full border border-[#d1d5db] px-5 py-2.5 text-sm font-semibold text-[#111827] transition hover:bg-[#f9fafb]">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}