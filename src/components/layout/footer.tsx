"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const FooterLink = ({ href, children, className }: FooterLinkProps) => {
  return (
    <Link 
      href={href}
      className={cn(
        'text-gray-300 hover:text-white transition-colors',
        className
      )}
    >
      {children}
    </Link>
  );
};

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection = ({ title, children }: FooterSectionProps) => {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="font-medium text-white">{title}</h3>
      <div className="flex flex-col space-y-2">
        {children}
      </div>
    </div>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-[#2a4399] to-[#162b6b] border-t border-indigo-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">Tidiane Diallo</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Développeur Fullstack .NET/C# spécialisé dans la création d'applications web robustes, sécurisées et évolutives.
            </p>
          </div>
          
          <FooterSection title="Navigation">
            <FooterLink href="/">Accueil</FooterLink>
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#portfolio">Portfolio</FooterLink>
            <FooterLink href="#blog">Articles</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterSection>
          
          <FooterSection title="Technologies">
            <FooterLink href="#">ASP.NET Core , C# & Blazor</FooterLink>
            <FooterLink href="#">React & NextJS</FooterLink>
            <FooterLink href="#">JavaScript & TypeScript</FooterLink>
            <FooterLink href="#">Azure DevOps</FooterLink>
            <FooterLink href="#">n8n</FooterLink>
          </FooterSection>
          
          <FooterSection title="Contact">
            <p className="text-sm text-gray-300">
              Email: tidiane.diallo@example.com
            </p>
            <p className="text-sm text-gray-300">
              Disponibilité: Remote & Île-de-France
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="mailto:tidiane.diallo@example.com" className="text-gray-300 hover:text-white" aria-label="Email">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                </svg>
              </a>
            </div>
          </FooterSection>
        </div>
        
        <div className="mt-12 border-t border-indigo-800 pt-8">
          <p className="text-sm text-gray-300 text-center">
            &copy; {currentYear} Tidiane Diallo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 