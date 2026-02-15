'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'NoteMark',
      description:
        'A full-stack note management platform with secure authentication, real-time CRUD operations, and a responsive modern UI. Built using Next.js App Router with MongoDB Atlas for scalable data handling and deployed on Vercel.',
      tech: [
        'Next.js',
        'TypeScript',
        'MongoDB Atlas',
        'NextAuth',
        'Tailwind CSS',
        'Vercel',
      ],
      github: 'https://github.com/KomalGoel18/NoteMark',
      live: 'https://notemark-hub.vercel.app/',
    },
    {
      title: 'Weather-Based Power Load Forecasting',
      description:
        'Machine learning–based system for forecasting electricity demand using historical weather data. The model analyzes temperature, humidity, and seasonal trends to improve prediction accuracy.',
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      github:
        'https://github.com/KomalGoel18/Weather-Based-Power-Load-Forecasting',
    },
    {
      title: 'SolveOn',
      description:
        'An interactive platform to practice coding and logical reasoning through structured problems with a clean and responsive UI.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/KomalGoel18/SolveOn',
    },
    {
      title: 'Stock Price Prediction',
      description:
        'A predictive analytics project using machine learning models to analyze historical stock data and forecast future price trends.',
      tech: ['Python', 'Machine Learning', 'Data Visualization'],
      github: 'https://github.com/KomalGoel18/Stock-price-prediction',
    },
    {
      title: 'MCTS Predictor',
      description:
        'A decision-making model integrating Monte Carlo Tree Search with neural networks to improve predictive accuracy through optimized search policies.',
      tech: ['Python', 'PyTorch', 'Machine Learning'],
      github: 'https://github.com/KomalGoel18/mcts-predictor',
    },
    {
      title: 'Library Management DBMS',
      description:
        'A relational database–driven system to efficiently manage book records, users, and issue/return transactions.',
      tech: ['SQL', 'DBMS', 'Database Design'],
      github: 'https://github.com/KomalGoel18/library-management-dbms',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-blue-500 text-2xl font-bold">05</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="h-full flex flex-col bg-gradient-to-br from-gray-800/50 to-gray-900/60 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl transition">

                {/* Header */}
                <div className="flex justify-between items-start gap-3 mb-4">

                  <h3 className="text-xl font-semibold text-white leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex gap-2 shrink-0">

                    {/* Live Button */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg 
                                   bg-blue-600/20 text-blue-400 border border-blue-500/30
                                   hover:bg-blue-600/30 transition text-[11px] font-semibold"
                      >
                        Live
                      </a>
                    )}

                    {/* GitHub Button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-lg
                                 bg-gray-800/50 hover:bg-gray-700 transition"
                    >
                      <Github className="w-4 h-4 text-gray-300" />
                    </a>

                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
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
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
