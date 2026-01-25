'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
  {
    title: 'Weather-Based Power Load Forecasting',
    description:
      'Machine learning–based system for forecasting electricity demand using historical weather data. The model analyzes temperature, humidity, and seasonal trends to improve power load prediction accuracy.',
    tech: ['Python', 'Machine Learning', 'Data Analysis'],
    github: 'https://github.com/KomalGoel18/Weather-Based-Power-Load-Forecasting',
    gradient: 'from-blue-600/20 to-cyan-600/20'
  },
  {
    title: 'SolveOn',
    description:
      'An interactive problem-solving platform designed to help users practice and improve coding and logical reasoning skills through structured challenges and solutions.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/KomalGoel18/SolveOn',
    gradient: 'from-purple-600/20 to-pink-600/20'
  },
  {
    title: 'Stock Price Prediction',
    description:
      'A predictive analytics project that uses machine learning techniques to analyze historical stock market data and forecast future price trends.',
    tech: ['Python', 'Machine Learning', 'Data Visualization'],
    github: 'https://github.com/KomalGoel18/Stock-price-prediction',
    gradient: 'from-emerald-600/20 to-green-600/20'
  },
  {
    title: 'MCTS Predictor',
    description:
      'A decision-making model integrating Monte Carlo Tree Search with neural networks to improve predictive accuracy through optimized search policies.',
    tech: ['Python', 'PyTorch', 'Machine Learning'],
    github: 'https://github.com/KomalGoel18/mcts-predictor',
    gradient: 'from-orange-600/20 to-red-600/20'
  },
  {
    title: 'Library Management DBMS',
    description:
      'A database-driven library management system designed to manage book records, users, and transactions efficiently using relational database concepts.',
    tech: ['SQL', 'DBMS', 'Database Design'],
    github: 'https://github.com/KomalGoel18/library-management-dbms',
    gradient: 'from-indigo-600/20 to-violet-600/20'
  }
];

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-blue-500 text-2xl font-bold">05</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">
  {project.title}
</h3>
                      <div>
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 bg-gray-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
  >
    <Github className="w-4 h-4 text-gray-300" />
  </a>
</div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

      </div>
    </section>
  );
}
