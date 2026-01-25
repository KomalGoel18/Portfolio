'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-blue-500 text-2xl font-bold">01</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          </div>

          <div className="space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed">
            <p>
  I am currently pursuing a Bachelor of Engineering in Electronics and Computer Engineering
  at Thapar Institute of Engineering and Technology. I am proficient in multiple programming languages and modern development frameworks.
</p>

<p>
  I enjoy building efficient and scalable software solutions, with hands-on experience in
  full-stack web development, AI-driven projects, and application development. My work focuses on writing clean,
  maintainable code and designing systems that balance performance, reliability, and
  usability.
</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
