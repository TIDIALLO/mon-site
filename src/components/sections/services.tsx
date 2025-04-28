"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ServiceCard = ({ title, description, icon, color }: ServiceProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="p-6 rounded-lg bg-[#1d1d1d] text-center"
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      title: 'Développement Web',
      description: 'Création d\'applications web de haute qualité et performantes sur mesure adaptées à vos besoins commerciaux et exigences industrielles.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      color: "bg-blue-600",
    },
    {
      title: 'Automatisation des tâches',
      description: 'Rationalisez vos opérations avec des solutions d\'automatisation intelligentes basées sur l\'IA pour une efficacité accrue.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      color: "bg-blue-600",
    },
    {
      title: 'Formation web',
      description: 'Donnez les moyens à votre équipe grâce à des programmes de formation complets sur le développement web full stack et les solutions d\'IA adaptés à la mise en œuvre au niveau de l\'entreprise.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      color: "bg-blue-600",
    },
  ];

  return (
    <section id="services" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-white sm:text-4xl mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nos Solutions IA
          </motion.h2>
          
          {/* Photo de profil */}
          <motion.div 
            className="flex justify-center my-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
              <Image 
                src="/images/tiz.jpg" 
                alt="Tidiane Diallo" 
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Carte des services */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 