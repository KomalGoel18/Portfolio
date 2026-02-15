'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Brain } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'from-blue-500 to-blue-600',
      skills: [
        'HTML / CSS',
        'JavaScript',
        'React.js / Next.js',
        'TypeScript',
        'Tailwind CSS',
        'ShadCN UI'
      ]
    },
    {
      icon: Code2,
      title: 'Programming Languages',
      color: 'from-emerald-500 to-emerald-600',
      skills: ['C / C++', 'Java', 'Python', 'MATLAB', 'JavaScript']
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'from-purple-500 to-purple-600',
      skills: [
        'Node.js / Express.js',
        'Flask',
        'RESTful APIs',
        'Next.js Server Actions',
        'Authentication (NextAuth)',
        'jQuery'
      ]
    },
    {
      icon: Server,
      title: 'Databases & ORM',
      color: 'from-indigo-500 to-indigo-600',
      skills: ['MySQL', 'MongoDB', 'Prisma ORM']
    },
    {
      icon: Server,
      title: 'Cloud, Tools & Platforms',
      color: 'from-orange-500 to-orange-600',
      skills: [
        'AWS',
        'Vercel',
        'Git / GitHub',
        'Google Colab',
        'VS Code'
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      color: 'from-cyan-500 to-cyan-600',
      skills: [
        'PyTorch',
        'TensorFlow',
        'Computer Vision',
        'Natural Language Processing'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-blue-500 text-2xl font-bold">04</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>

                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
