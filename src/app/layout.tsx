import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import React from 'react';
import './globals.css';
import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';

const bodyFont = Manrope({ subsets: ['latin'], variable: '--font-body' });
const displayFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Grassroots Lifting - Olympic Weightlifting Coaching & Training',
  description: 'Professional Olympic weightlifting coaching, workshops, and programs. Achieve your strength goals with expert guidance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <Navigation />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
