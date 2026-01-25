'use client';

import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/KomalGoel18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/komal-goel-b9bb4a291/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:goelkomal836@gmail.com"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Mail</span>
            </a>
            <a
              href="tel:+919517843063"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">Phone</span>
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            Designed & Built by Komal Goel • {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
