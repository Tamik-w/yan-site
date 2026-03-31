'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Connor Brogan',
    role: 'Powerlifter - Masters Division',
    content:
      'Within a year of working with Adrian, I went from attending adult "Move and Lift" classes to competing in sanctioned powerlifting meets. Adrian guided me from being a casual gym-goer to becoming an athlete who set national federation records in my weight and age class. What stood out most was his holistic approach to training. I did not just get stronger physically - Adrian\'s methods helped me develop greater focus, clarity, resilience, and stress management. I noticed real improvements in my concentration, mindset, and ability to handle daily challenges. Adrian did not just train me to be a better athlete; he pushed me to become the best version of myself, both in and out of the gym.',
  },
  {
    id: 2,
    name: 'Mateo Landa',
    role: 'Running Back - GCVI',
    content:
      'I remember the first time Adrian came to coach me in the weight room - I was skeptical. I have never been quick to warm up to new coaches, and it usually takes me a while to adapt. But over time, he became one of my favorite coaches and someone I have built a strong connection with. It is clear that Adrian genuinely loves coaching and is passionate about what he does. That really stood out to me when he took the time to give me thoughtful feedback, especially on my deadlift and power clean. He taught me the form that best suited my body type and introduced me to exercises that helped me improve those lifts. He consistently pushed me to my limits and helped me break past them. Because of that, I have grown not just physically but mentally as well. Adrian is easily one of the best lifting coaches I have ever had, and I feel truly lucky to have been coached by him.',
  },
  {
    id: 3,
    name: 'Dmytrii Tamurov',
    role: 'Former Ukrainian National Team Athlete',
    content:
      'Love the idea and their approach - building the foundation of strength and technique while planning for the long term. The philosophy is to embrace the suffering of growth and witness yourself becoming someone who once existed only in your imagination.',
  },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const nextIndex = (index + testimonials.length) % testimonials.length;
    const strip = stripRef.current;
    if (!strip) return;

    const card = strip.children[nextIndex] as HTMLElement | undefined;
    if (!card) return;

    setCurrent(nextIndex);
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  const goNext = () => scrollToIndex(current + 1);
  const goPrev = () => scrollToIndex(current - 1);

  return (
    <div className="relative isolate bg-[#f4f5f7]">
      <Image
        src="/image-1.jpeg"
        alt="Olympic weightlifting facility"
        fill
        priority
        className="-z-20 object-cover opacity-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f8fafc]/95 via-[#f3f4f6]/95 to-[#e9ecef]/95" />

      <section className="container-max px-4 pb-8 pt-4 sm:px-6 lg:px-8 lg:pb-12 lg:pt-6">
        <div className="rounded-3xl border border-[#e5e7eb] bg-white p-4 shadow-sm sm:p-5 lg:p-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="rounded-2xl border border-[#e5e7eb] bg-white p-5 sm:p-6 lg:col-span-7 lg:p-7">
              <p className="mb-4 inline-flex rounded-full border border-[#d9f99d] bg-[#f7fee7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#365314]">
                Grassroots Lifting
              </p>
              <h1 className="mb-3 text-4xl font-semibold leading-[0.95] text-[#0f172a] sm:text-5xl lg:text-6xl">
                Be stronger.
                <br />
                Be confident.
                <br />
                As it should be.
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-[#4b5563] sm:text-base">
                Get stronger and learn through coaching that is honest, practical, and rooted in tradition. Built from the lessons of mentors, the patterns of success, and a community that grows together.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/coaching" className="inline-flex items-center justify-center rounded-full border border-[#d1d5db] bg-white px-5 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#f9fafb]">
                  Book Consultation
                </Link>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#f3f4f6] px-3 py-1 text-xs text-[#374151]">Personalized coaching</span>
                <span className="rounded-full bg-[#f3f4f6] px-3 py-1 text-xs text-[#374151]">Technique-first training</span>
                <span className="rounded-full bg-[#f3f4f6] px-3 py-1 text-xs text-[#374151]">Supportive community</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:col-span-5">
              <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white p-4">
                <Image src="/image-2.jpg" alt="Coach Adrian" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#d9ff45]">Coach</p>
                  <p className="text-xl font-semibold text-white">Adrian</p>
                </div>
              </div>
              <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white p-4">
                <Image src="/image-3.jpg" alt="Coach Katerina" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#d9ff45]">Coach</p>
                  <p className="text-xl font-semibold text-white">Katerina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 bg-gradient-to-b from-transparent via-[#f5f7f9] to-[#eef2f6]" />

      <section className="bg-gradient-to-b from-[#eef2f6] via-[#f2f5f8] to-[#f8fafc] py-14 sm:py-16 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold leading-tight text-[#0f172a] sm:text-5xl">
              Read reviews,
              <br />
              ride with confidence.
            </h2>
            <p className="mt-3 text-sm text-[#64748b] sm:text-base">
              Real feedback from athletes inside our community.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch">
            <aside className="bright-card bg-gradient-to-b from-white to-[#f8fafc] p-6 text-[#111827] lg:col-span-3 lg:p-8">
              <Quote className="h-14 w-14 text-[#94a3b8]" />
              <p className="mt-4 text-3xl font-medium leading-tight">
                What our
                <br />
                customers are
                <br />
                saying
              </p>
              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  className="nav-brick h-9 w-9 p-0"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="h-px flex-1 bg-[#cbd5e1]" />
                <button
                  type="button"
                  onClick={goNext}
                  className="nav-brick h-9 w-9 p-0"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div ref={stripRef} className="review-strip flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
                {testimonials.map((testimonial, index) => (
                  <article
                    key={testimonial.id}
                    className={`bright-card w-[320px] shrink-0 snap-start p-5 transition sm:w-[360px] lg:w-[430px] ${
                      index === current ? 'border-[#111827] ring-1 ring-[#111827]' : ''
                    }`}
                  >
                    <p className="min-h-[136px] text-sm leading-relaxed text-[#1f2937]">
                      {testimonial.content.length > 280 ? `${testimonial.content.slice(0, 280)}...` : testimonial.content}
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-[#e5e7eb] pt-4">
                      <div className="h-10 w-10 rounded-full bg-[#111827] text-center text-xs leading-10 text-white">
                        {testimonial.name
                          .split(' ')
                          .slice(0, 2)
                          .map((part) => part[0])
                          .join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-[#111827]">{testimonial.name}</p>
                        <p className="text-xs text-[#6b7280]">{testimonial.role}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    onClick={() => scrollToIndex(index)}
                    className={`h-2.5 rounded-full transition ${index === current ? 'w-8 bg-[#111827]' : 'w-2.5 bg-[#c4c4c4]'}`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
