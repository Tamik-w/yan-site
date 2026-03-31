'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Coaching', href: '/coaching' },
    { name: 'Workshops', href: '/workshops' },
    // { name: 'Programs', href: '/programs' },
    { name: 'Contact', href: '/contact' },
    // { name: 'About', href: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-xl">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex h-[84px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-[#f7fee7] via-white to-[#ecfccb] shadow-[0_10px_24px_rgba(132,204,22,0.18)] ring-1 ring-[#d9f99d]/70">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_55%)]" />
              <Image src="/logo.png" alt="Grassroots Lifting Logo" fill className="object-contain p-1.5 opacity-90 mix-blend-multiply" />
            </div>
            <span className="text-xl font-semibold leading-tight text-gray-900">Grassroots Lifting</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-brick"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="nav-brick-dark">
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg border border-gray-300 bg-white p-2 text-gray-900 transition hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-brick w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="nav-brick-dark w-full"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
