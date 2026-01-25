'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl" />

          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-sm border border-gray-700/50 shadow-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Let's build something together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
            >
              Currently seeking internship and full-time roles. Open to meaningful collaborations, contributions, and building impactful solutions together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
  href="mailto:goelkomal836@gmail.com"
>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg flex items-center gap-2 mx-auto">
                Get In Touch
                <Send className="w-5 h-5" />
              </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
