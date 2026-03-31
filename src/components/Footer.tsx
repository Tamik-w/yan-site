import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-[#365314] via-[#4d7c0f] to-[#bef264] shadow-[0_10px_24px_rgba(132,204,22,0.2)] ring-1 ring-[#d9f99d]/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_55%)]" />
                <Image src="/logo.png" alt="Grassroots Lifting Logo" fill className="object-contain p-1.5 opacity-90 mix-blend-screen" />
              </div>
              <span className="text-2xl font-bold">Grassroots Lifting</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your premier destination for Olympic weightlifting coaching, workshops, and programs. 
              Achieve your strength goals with expert guidance and proven methodologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/coaching" className="text-gray-300 hover:text-green-400 transition-colors">Coaching</a></li>
              <li><a href="/workshops" className="text-gray-300 hover:text-green-400 transition-colors">Workshops</a></li>
              <li><a href="/programs" className="text-gray-300 hover:text-green-400 transition-colors">Programs</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-green-400 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">grassrootsweightlifting@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+1 (123) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">123 Gym Street, Fitness City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Grassroots Lifting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
