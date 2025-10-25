import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/logos/logo.jpeg" alt="Grassroots Lifting Logo" className="h-8 w-8" />
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
