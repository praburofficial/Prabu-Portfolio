import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { ParticleBackground } from './components/ParticleBackground';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Journey } from './sections/Journey';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

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
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Certifications />
      <Contact />
    </main>
  );
}

function JourneyPage() {
  return (
    <main className="relative z-10 flex flex-col gap-10 lg:gap-20">
      <Journey />
    </main>
  );
}

function CertificationsPage() {
  return (
    <main className="relative z-10 flex flex-col gap-10 lg:gap-20">
      <Certifications />
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

          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;