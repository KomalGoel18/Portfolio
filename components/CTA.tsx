'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl" />

          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/60 rounded-3xl p-8 sm:p-12 backdrop-blur-xl border border-gray-700/50 shadow-2xl">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Get in Touch
              </h2>
            </motion.div>

            {/* Form */}
            <form
              action="https://formspree.io/f/xzdvypno"
              method="POST"
              className="space-y-8"
            >
              {/* Name */}
              <div>
                <label className="block text-white mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="What's your good name?"
                  className="w-full rounded-xl bg-[#141842]/60 border border-gray-700/50 px-5 py-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white mb-2 text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="What's your e-mail address?"
                  className="w-full rounded-xl bg-[#141842]/60 border border-gray-700/50 px-5 py-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white mb-2 text-sm">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="What do you want to say?"
                  className="w-full rounded-xl bg-[#141842]/60 border border-gray-700/50 px-5 py-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                />
              </div>

              {/* Send Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center"
              >
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl text-lg font-medium transition-all"
                >
                  Send
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
