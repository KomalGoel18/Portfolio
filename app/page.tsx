import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e27]">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}
