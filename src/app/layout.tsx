import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
