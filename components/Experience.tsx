'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experience = [
    {
      role: 'Remote Sensing Intern',
      organization: 'Thapar Institute of Engineering and Technology',
      location: 'Patiala, Punjab',
      period: 'Jun 2024 – Jul 2024',
      description:
        'Developed high-accuracy machine learning models for cyclone forecasting (94%) and methane emission estimation (97%) using NOAA and NASA satellite data. Performed spatio-temporal analysis on satellite imagery and improved forecasting reliability through feature engineering and model optimization.',
      icon: Briefcase,
    },
  ];

  return (
    <section
      id="experience"
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
            <span className="text-blue-500 text-2xl font-bold">03</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Work Experience
            </h2>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.role}
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
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-700/50 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {item.role}
                        </h3>
                        <p className="text-gray-400">
                          {item.organization} • {item.location}
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
