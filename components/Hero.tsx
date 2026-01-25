'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex justify-center">
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="space-y-6 max-w-3xl text-center lg:text-center"
>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="text-blue-500 text-sm font-medium bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                Actively Seeking Internships & Job Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Komal Goel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              Electronics and Computer Engineering student specializing in building
              high-performance web applications and scalable AI-driven solutions.
            </motion.p>

            <motion.a
  href="https://www.google.com/maps/place/Patiala,+Punjab"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.55 }}
  className="mt-3 inline-flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors text-sm"
>
  <span className="text-lg">🌍</span>
  Patiala, Punjab
</motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4 justify-center"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 group">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center gap-3 justify-center">
                <a
                  href="https://github.com/KomalGoel18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/komal-goel-b9bb4a291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-300" />
                </a>
                <a
                  href="mailto:goelkomal836@gmail.com"
                  className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Mail className="w-5 h-5 text-gray-300" />
                </a>
                <a
  href="tel:+919517843063"
  className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
>
  <Phone className="w-5 h-5 text-gray-300" />
</a>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
