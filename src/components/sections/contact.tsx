"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Composant Input avec style moderne
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-1">
        {label}
      </label>
      <input
        id={id}
        className="w-full px-4 py-2 bg-[#1d1d1d] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a4399] focus:border-[#2a4399] text-white"
        {...props}
      />
    </div>
  );
};

// Composant Textarea avec style moderne
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

const Textarea = ({ label, id, ...props }: TextareaProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        className="w-full px-4 py-2 bg-[#1d1d1d] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a4399] focus:border-[#2a4399] text-white"
        {...props}
      />
    </div>
  );
};

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis');
  };

  return (
    <section id="contact" className="py-16 bg-black" style={{ backgroundImage: "url('/images/grid-pattern.png')", backgroundSize: "120px", backgroundRepeat: "repeat" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-white to-[#1e3a8a] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contactez-nous
          </motion.h2>
          
          <div className="mt-12 text-center mx-auto max-w-2xl mb-10">
            <p className="text-gray-300 text-lg">
              Prêt à démarrer votre voyage IA? Contactez-nous dès aujourd&apos;hui et discutons de la façon dont nous pouvons vous aider à transformer votre entreprise.
            </p>
          </div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-[#111111] rounded-lg shadow-xl max-w-xl mx-auto p-8 border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Nom"
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  required
                />
                
                <Input
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              
              <Input
                label="Sujet"
                id="subject"
                type="text"
                placeholder="Sujet de votre message"
                required
              />
              
              <Textarea
                label="Message"
                id="message"
                rows={4}
                placeholder="Comment pouvons-nous vous aider ?"
                required
              />
              
              <div className="mt-4">
                <Button type="submit" className="bg-[#1e3a8a] hover:bg-[#2a4399] text-white w-full py-3 rounded-md">
                  Envoyer le message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 