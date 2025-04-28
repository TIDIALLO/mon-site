"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface BlogPostProps {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  date: string;
  readTime: string;
}

const BlogPostCard = ({ title, excerpt, slug, coverImage, date, readTime }: BlogPostProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col overflow-hidden border-gray-800 border bg-[#111111] shadow-xl hover:shadow-2xl">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105 duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </div>
        <CardHeader className="pb-0">
          <div className="flex items-center text-sm text-gray-400 space-x-2 mb-2">
            <time dateTime={date}>{date}</time>
            <span>•</span>
            <span>{readTime}</span>
          </div>
          <Link href={`/blog/${slug}`} className="hover:text-[#2a4399] transition-colors">
            <h3 className="text-xl font-semibold text-white line-clamp-2">{title}</h3>
          </Link>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <Link href={`/blog/${slug}`} className="text-[#2a4399] hover:text-[#3b5ac7] font-medium flex items-center">
            Lire la suite
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function Blog() {
  // Ces données seraient normalement chargées depuis des fichiers .mdx
  const blogPosts: BlogPostProps[] = [
    {
      title: "Intelligence Artificielle et enjeux d'apprentissage",
      excerpt: "Découvrez comment l'IA révolutionne les techniques d'apprentissage automatique et quels sont les défis éthiques et techniques à relever pour les développeurs.",
      slug: "ia-enjeux-apprentissage",
      coverImage: "/images/blog/aspnet-performance.jpg",
      date: "15 juin 2023",
      readTime: "8 min de lecture",
    },
    {
      title: "Développer des solutions IA éthiques et responsables",
      excerpt: "Un guide complet pour concevoir et implémenter des solutions d'IA qui respectent la vie privée et l'éthique, avec des exemples concrets de mise en œuvre.",
      slug: "ia-ethique-responsable",
      coverImage: "/images/blog/microservices.jpg",
      date: "2 mai 2023",
      readTime: "12 min de lecture",
    },
    {
      title: "Comment l'IA peut transformer votre entreprise",
      excerpt: "Stratégies pratiques pour intégrer l'intelligence artificielle dans vos processus d'entreprise et maximiser votre retour sur investissement.",
      slug: "ia-transformation-entreprise",
      coverImage: "/images/blog/security-api.jpg",
      date: "18 avril 2023",
      readTime: "10 min de lecture",
    },
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
    <section id="blog" className="py-20 bg-black" style={{ backgroundImage: "url('/images/grid-pattern.png')", backgroundSize: "120px", backgroundRepeat: "repeat" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-white to-[#1e3a8a] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Articles IA
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Découvrez nos dernières réflexions sur l&apos;intelligence artificielle
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BlogPostCard {...post} />
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
          <Link href="/blog">
            <Button variant="outline" size="lg" className="text-[#2a4399] border-[#2a4399] hover:bg-[#1e3a8a] hover:bg-opacity-20">
              Tous les articles
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 