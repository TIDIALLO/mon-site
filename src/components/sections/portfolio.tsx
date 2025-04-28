"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const ProjectCard = ({ title, description, image, technologies, link }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-[#111111] rounded-xl overflow-hidden border border-gray-800 shadow-xl"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-[#1e3a8a] bg-opacity-20 text-[#2a4399] text-xs px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <Link href={link}>
          <Button variant="outline" className="text-[#2a4399] border-[#2a4399] hover:bg-[#1e3a8a] hover:bg-opacity-20 w-full">
            Voir le projet
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  const projects: ProjectCardProps[] = [
    {
      title: "IA Assistant Virtuel",
      description: "Assistant virtuel intelligent utilisant le traitement du langage naturel pour automatiser le service client.",
      image: "/images/portfolio/ia-assistant.jpg",
      technologies: ["Python", "TensorFlow", "NLP", "React"],
      link: "#"
    },
    {
      title: "Plateforme d'Analyse Prédictive",
      description: "Système d'analyse qui utilise le machine learning pour prédire les tendances commerciales et optimiser les opérations.",
      image: "/images/portfolio/analyse-predictive.jpg",
      technologies: ["Python", "Scikit-learn", "Flask", "D3.js"],
      link: "#"
    },
    {
      title: "Système de Recommandation IA",
      description: "Moteur de recommandation personnalisé qui améliore l'engagement utilisateur et les conversions pour les sites e-commerce.",
      image: "/images/portfolio/recommandation.jpg",
      technologies: ["Python", "PyTorch", "Vue.js", "FastAPI"],
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-black" style={{ backgroundImage: "url('/images/grid-pattern.png')", backgroundSize: "120px", backgroundRepeat: "repeat" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-white to-[#1e3a8a] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projets IA
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Découvrez nos solutions d&apos;intelligence artificielle
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/portfolio">
            <Button variant="outline" size="lg" className="text-[#2a4399] border-[#2a4399] hover:bg-[#1e3a8a] hover:bg-opacity-20">
              Voir tous les projets
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 