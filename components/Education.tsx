'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, School } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'B.E. in Electronics and Computer Engineering',
      institution: 'Thapar Institute of Engineering and Technology',
      location: 'Patiala, Punjab',
      period: '2022 – Present',
      icon: GraduationCap,
    },
    {
      degree: 'Class XII (Senior Secondary)',
      institution: 'Guru Nanak Foundation Public School',
      location: 'Patiala, Punjab',
      period: '2021 – 2022',
      description: 'Completed Class XII with a score of 87.4%',
      icon: School,
    },
    {
      degree: 'Class X (Secondary)',
      institution: "St. Peter's Academy",
      location: 'Patiala, Punjab',
      period: '2019 – 2020',
      description: 'Completed Class X with a score of 89.8%',
      icon: School,
    },
  ];

  return (
    <section
      id="education"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-blue-500 text-2xl font-bold">02</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Education
            </h2>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex gap-6 items-start">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    {index < education.length - 1 && (
                      <div className="absolute left-1/2 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-600/50 to-transparent" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-700/50 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {item.degree}
                        </h3>
                        <p className="text-gray-400">
                          {item.institution}
                          {item.location && ` • ${item.location}`}
                        </p>
                      </div>
                      <span className="text-blue-400 font-medium whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
