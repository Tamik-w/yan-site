'use client';

import React, { useState } from 'react';
import { CheckCircle, Instagram, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      details: 'grassrootsweightlifting@gmail.com',
      description: 'Send us an email anytime',
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: 'Instagram Katerina',
      details: '@1flykat',
      description: 'Follow Katerina',
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: 'Instagram Adrian',
      details: '@grassrootsliftingcoach',
      description: 'Follow Adrian',
    },
  ];

  const services = ['Consultation', 'Online Coaching', 'Introduction to Snatch'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const nextErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) nextErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) nextErrors.message = 'Message is required';
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      nextErrors.phone = 'Phone number is invalid';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setErrors({ submit: result.error || 'Failed to send message. Please try again.' });
      }
    } catch {
      setErrors({ submit: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bright-shell">
      <section className="container-max px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="bright-panel p-4 sm:p-6 lg:p-7 reveal-up">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 inline-flex rounded-full border border-[#d9f99d] bg-[#f7fee7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#365314]">
                Contact
              </p>
              <h1 className="text-4xl font-semibold text-[#0f172a] sm:text-5xl">Get In Touch</h1>
              <p className="mt-2 max-w-2xl text-sm text-[#4b5563] sm:text-base">
                Ready to start your Olympic weightlifting journey? Contact us today!
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=3040+Universal+Dr,+Mississauga,+ON+L4X+2C8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#d1d5db] px-5 py-2.5 text-sm font-semibold text-[#111827] transition hover:bg-[#f9fafb]"
            >
              <MapPin className="mr-2 h-4 w-4" /> 3040 Universal Dr, Mississauga
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="bright-card reveal-up p-4 sm:p-5 lg:col-span-7" style={{ animationDelay: '100ms' }}>
              <h2 className="text-2xl font-semibold text-[#111827]">Send Us a Message</h2>
              <p className="mt-1 text-sm text-[#4b5563]">Fill out the form below and we will get back to you within 24 hours.</p>

              {isSubmitted ? (
                <div className="mt-6 rounded-2xl border border-[#bef264] bg-[#f7fee7] p-5 text-center">
                  <CheckCircle className="mx-auto h-8 w-8 text-[#65a30d]" />
                  <h3 className="mt-2 text-lg font-semibold text-[#111827]">Message Sent!</h3>
                  <p className="mt-1 text-sm text-[#4b5563]">We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-[#4b5563]">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none ${
                          errors.name ? 'border-red-400/80' : 'border-[#d1d5db] focus:border-[#84cc16]'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-[#4b5563]">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none ${
                          errors.email ? 'border-red-400/80' : 'border-[#d1d5db] focus:border-[#84cc16]'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-[#4b5563]">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none ${
                          errors.phone ? 'border-red-400/80' : 'border-[#d1d5db] focus:border-[#84cc16]'
                        }`}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="service" className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-[#4b5563]">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#d1d5db] bg-white px-3 py-2.5 text-sm text-[#111827] focus:border-[#84cc16] focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-[#4b5563]">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none ${
                        errors.message ? 'border-red-400/80' : 'border-[#d1d5db] focus:border-[#84cc16]'
                      }`}
                      placeholder="Tell us about your goals, experience level, or any questions you have..."
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  {errors.submit && <div className="rounded-xl border border-red-300 bg-red-50 px-3 py-2 text-xs text-red-600">{errors.submit}</div>}

                  <button type="submit" disabled={isLoading} className="inline-flex w-full items-center justify-center rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60">
                    {isLoading ? 'Sending...' : 'Send Message'}
                    {!isLoading && <Send className="ml-2 h-4 w-4" />}
                  </button>
                </form>
              )}
            </div>

            <aside className="space-y-5 lg:col-span-5">
              <div className="bright-card reveal-up overflow-hidden p-4 sm:p-5" style={{ animationDelay: '160ms' }}>
                <h3 className="text-lg font-semibold text-[#111827]">Find Us</h3>
                <p className="mt-1 text-xs text-[#6b7280]">3040 Universal Dr, Mississauga, ON L4X 2C8</p>
                <div className="mt-3 h-[230px] overflow-hidden rounded-xl border border-[#e5e7eb]">
                  <iframe
                    src="https://www.google.com/maps?q=3040+Universal+Dr,+Mississauga,+ON+L4X+2C8&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Grassroots Lifting Location"
                  />
                </div>
              </div>

              <div className="bright-card reveal-up p-4 sm:p-5" style={{ animationDelay: '220ms' }}>
                <h3 className="text-lg font-semibold text-[#111827]">Contact Information</h3>
                <div className="mt-3 space-y-3">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-3">
                      <div className="flex items-center gap-2 text-[#3f6212]">
                        {info.icon}
                        <span className="text-sm font-semibold text-[#111827]">{info.title}</span>
                      </div>
                      <p className="mt-1 text-sm text-[#374151]">{info.details}</p>
                      <p className="text-xs text-[#6b7280]">{info.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
