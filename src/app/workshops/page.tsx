'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, CheckCircle, Clock, MapPin, Users } from 'lucide-react';

export default function WorkshopsPage() {
  const upcomingWorkshops = [
    {
      id: 1,
      title: 'Introduction to Snatch',
      date: 'April 25th',
      time: '10:00 AM - 12:00 AM',
      location: 'Fortis Fitness West',
      instructor: 'Coach Adrian',
      price: '$100',
      level: 'Beginner',
      description:
        'A 90-minute intensive introducing Snatch and Clean & Jerk technique, including a presentation, technique analysis, practical drills, personalized feedback, and individualized application.',
      topics: [
        'A slideshow presentation about the lift (snatch / clean and jerk)',
        'Warm Up - Mobility Assessment',
        'Progression & Regressions for the lift',
        'Introduction to technique complexes',
        'Technique Testing',
        'Q&A portion',
      ],
    },
  ];

  return (
    <div className="bright-shell">
      <section className="container-max px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="bright-panel p-5 sm:p-6 lg:p-7 reveal-up">
          <div className="text-center">
            <p className="mx-auto mb-2 inline-flex rounded-full border border-[#d9f99d] bg-[#f7fee7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#365314]">
              Workshops
            </p>
            <h1 className="text-4xl font-semibold text-[#0f172a] sm:text-5xl">Upcoming Workshops</h1>
            <p className="mt-2 text-sm text-[#4b5563] sm:text-base">Book your spot in our next intensive session</p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {upcomingWorkshops.map((workshop, index) => (
              <article key={workshop.id} className="bright-card reveal-up p-5" style={{ animationDelay: `${index * 120}ms` }}>
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-[#111827]">{workshop.title}</h2>
                    <p className="text-sm font-semibold text-[#3f6212]">{workshop.level}</p>
                  </div>
                  <p className="text-2xl font-bold text-[#3f6212]">{workshop.price}</p>
                </div>

                <p className="text-sm text-[#4b5563]">{workshop.description}</p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-[#4b5563]">
                  <p className="flex items-center"><Calendar className="mr-1.5 h-4 w-4" />{workshop.date}</p>
                  <p className="flex items-center"><Clock className="mr-1.5 h-4 w-4" />{workshop.time}</p>
                  <p className="flex items-center"><MapPin className="mr-1.5 h-4 w-4" />{workshop.location}</p>
                  <p className="flex items-center"><Users className="mr-1.5 h-4 w-4" />{workshop.instructor}</p>
                </div>

                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#111827]">What You'll Learn</h3>
                <ul className="mt-2 space-y-1.5">
                  {workshop.topics.map((topic) => (
                    <li key={topic} className="flex items-start text-sm text-[#374151]">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-[#65a30d]" />
                      {topic}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black">
                  Register Now
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
