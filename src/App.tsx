import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
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

function HomePage() {
  return (
    <main className="relative z-10 flex flex-col gap-10 lg:gap-20">
      <Suspense fallback={<Loading />}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
      </Suspense>
    </main>
  );
}

function JourneyPage() {
  return (
    <main className="relative z-10 flex flex-col gap-10 lg:gap-20">
      <Suspense fallback={<Loading />}>
        <Journey />
      </Suspense>
    </main>
  );
}

function CertificationsPage() {
  return (
    <main className="relative z-10 flex flex-col gap-10 lg:gap-20">
      <Suspense fallback={<Loading />}>
        <Certifications />
      </Suspense>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-black">
          {/* Global Background Layer */}
          <ParticleBackground />

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