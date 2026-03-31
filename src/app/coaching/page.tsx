'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ChevronDown, Clock, Users } from 'lucide-react';

export default function CoachingPage() {
  const [expandedCoach, setExpandedCoach] = useState<string | null>(null);

  const coachingOptions = [
    {
      title: 'Online Coaching',
      price: '$200/month',
      duration: 'Ongoing',
      description:
        'Remote Coaching for individuals requiring regular check-ins, more flexibility in their structure, with constant support.',
      features: [
        'Adjustable weekly training program',
        'Weekly video analysis and feedback',
        'Nutrition and lifestyle guidance',
        'Best suited for individuals that require more of a holistic approach to their goals that may require continuous revision as training proceeds',
      ],
    },
  ];

  const coaches = [
    {
      name: 'Adrian',
      title: 'Coach',
      experience: '5+ years',
      credentials: 'Fitness and Health Promotion, NCCP Competition Introduction',
      image: '/image-2.jpg',
      specialties: ['Weightlifting', 'Powerlifting', 'Strongman', 'Youth Resistance Training'],
    },
    {
      name: 'Katerina',
      title: 'Coach',
      experience: '10+ years',
      credentials: "BSc Psychology, BSc Biology, NSCA Women's Fitness Specialist",
      image: '/image-3.jpg',
      specialties: ["Women's Fitness", 'Pre & Post Natal Training', 'Resistance Training'],
    },
  ];

  const toggleCoach = (name: string) => {
    setExpandedCoach((current) => (current === name ? null : name));
  };

  return (
    <div className="bright-shell">
      <section className="container-max px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="bright-panel p-5 sm:p-6 lg:p-7 reveal-up">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 inline-flex rounded-full border border-[#d9f99d] bg-[#f7fee7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#365314]">
                Coaching
              </p>
              <h1 className="text-4xl font-semibold text-[#0f172a] sm:text-5xl">Choose Your Coaching Style</h1>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black">
              Get Started
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="space-y-4">
              {coachingOptions.map((option, index) => (
                <article key={option.title} className="bright-card reveal-up p-4 sm:p-5" style={{ animationDelay: `${index * 120}ms` }}>
                  <div className="mb-3">
                    <h2 className="text-xl font-semibold text-[#111827]">{option.title}</h2>
                    <p className="text-lg font-bold text-[#3f6212]">{option.price}</p>
                    <p className="mt-1 flex items-center text-sm text-[#6b7280]">
                      <Clock className="mr-1.5 h-4 w-4" />
                      {option.duration}
                    </p>
                  </div>
                  <p className="text-sm text-[#4b5563]">{option.description}</p>
                  <ul className="mt-3 space-y-2">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm text-[#374151]">
                        <CheckCircle className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-[#65a30d]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {coaches.map((coach, index) => (
                <article key={coach.name} className="bright-card reveal-up overflow-hidden p-4 sm:p-5" style={{ animationDelay: `${index * 140 + 80}ms` }}>
                  <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white p-4">
                    <Image src={coach.image} alt={coach.name} fill className="object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
                    <div className="relative z-10 flex h-full flex-col justify-end">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#d9ff45]">{coach.title}</p>
                      <p className="text-xl font-semibold text-white">{coach.name}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleCoach(coach.name)}
                    className="mt-4 inline-flex items-center justify-center rounded-full border border-[#d1d5db] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#f9fafb]"
                    aria-expanded={expandedCoach === coach.name}
                  >
                    See More Details
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${expandedCoach === coach.name ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`grid transition-all duration-300 ease-out ${expandedCoach === coach.name ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] p-4">
                        <p className="flex items-center text-sm text-[#6b7280]">
                          <Users className="mr-1.5 h-4 w-4" />
                          {coach.experience} experience
                        </p>
                        <p className="mt-2 text-sm text-[#4b5563]">{coach.credentials}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {coach.specialties.map((specialty) => (
                            <span key={specialty} className="rounded-full bg-[#f3f4f6] px-3 py-1 text-xs text-[#374151]">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
