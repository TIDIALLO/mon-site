import React from 'react';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import Blog from '@/components/sections/blog';
import Contact from '@/components/sections/contact';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TD Tech | Développeur Web Fullstack',
  description: 'Développeur Fullstack spécialisé dans la création d\'applications web et mobiles modernes. Services de développement web, design UI/UX et conseil technique.',
  openGraph: {
    title: 'TD Tech | Développeur Web Fullstack',
    description: 'Développeur Fullstack spécialisé dans la création d\'applications web et mobiles modernes. Services de développement web, design UI/UX et conseil technique.',
    url: 'https://tdtech.fr',
    siteName: 'TD Tech',
    images: [
      {
        url: '/images/tiz.jpg',
        width: 1200,
        height: 630,
        alt: 'TD Tech - Développeur Web Fullstack',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TD Tech | Développeur Web Fullstack',
    description: 'Développeur Fullstack spécialisé dans la création d\'applications web et mobiles modernes.',
    creator: '@tdtech',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://tdtech.fr',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
