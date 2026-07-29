import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { ParticleBackground } from './components/ParticleBackground';
import { Loading } from './components/Loading';

// Lazy load sections and components
const Hero = lazy(() => import('./sections/Hero').then(m => ({ default: m.Hero })));
const About = lazy(() => import('./sections/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('./sections/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('./sections/Projects').then(m => ({ default: m.Projects })));
const Journey = lazy(() => import('./sections/Journey').then(m => ({ default: m.Journey })));
const Certifications = lazy(() => import('./sections/Certifications').then(m => ({ default: m.Certifications })));
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

/* Lenis smooth scroll wrapper */
function SmoothScroll({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [location.pathname]);

  return <>{children}</>;
}

/* Shared entrance for every routed page */
function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 flex flex-col"
    >
      {children}
    </motion.main>
  );
}

function HomePage() {
  return (
    <Page>
      <Suspense fallback={<Loading />}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
      </Suspense>
    </Page>
  );
}

function JourneyPage() {
  return (
    <Page>
      <Suspense fallback={<Loading />}>
        <Journey />
      </Suspense>
    </Page>
  );
}

function CertificationsPage() {
  return (
    <Page>
      <Suspense fallback={<Loading />}>
        <Certifications />
      </Suspense>
    </Page>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="relative min-h-screen bg-background text-ink antialiased">
          {/* Global Background Layer */}
          <ParticleBackground />

          {/* Skip link — keyboard users land here first */}
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-btn focus:bg-primary focus:px-4 focus:py-2.5 focus:font-semibold focus:text-white focus:shadow-e2"
          >
            Skip to content
          </a>

          {/* Static Header Nav */}
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
          </Routes>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
