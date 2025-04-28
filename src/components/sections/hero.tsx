"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-b from-[#151515] to-black" style={{ backgroundImage: "url('/images/grid-pattern.png')", backgroundSize: "120px", backgroundRepeat: "repeat" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left flex flex-col justify-center">
            <motion.h1
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block bg-gradient-to-r from-white to-[#1e3a8a] text-transparent bg-clip-text">
                <span>Apprendre,</span>{" "}
                <span>Créer,</span>{" "}
                <span>Évoluer</span>
              </span>
              <span className="block bg-gradient-to-r from-white to-[#1e3a8a] text-transparent bg-clip-text">avec l&apos;IA</span>
            </motion.h1>
            
            <motion.p
              className="mt-6 text-lg text-gray-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Nous vous aidons à découvrir, développer et lancer des applications et solutions d&apos;IA pour votre équipe, vos clients et vos utilisateurs.
            </motion.p>
            
            <motion.div
              className="mt-8 sm:flex sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-md">
                <Link href="#contact">
                  <Button variant="primary" size="lg" className="bg-gradient-to-r from-[#1e3a8a] to-[#2a4399] hover:from-[#1e3a8a] hover:to-[#2e4cad] text-white px-8 py-3 text-lg font-medium rounded-full">
                    Nous Contacter
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto w-full rounded-lg">
              <div className="relative block w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/tiz.jpg"
                  alt="Tidiane DIALLO - Développeur IA"
                  width={400}
                  height={400}
                  className="object-cover rounded-lg opacity-95"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a] to-[#2a4399] mix-blend-multiply opacity-20"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 