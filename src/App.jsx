import React, { useState, useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import SectionDivider from './components/SectionDivider';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Skills      from './components/Skills';
import Projects    from './components/Projects';
import Experience  from './components/Experience';
import Education   from './components/Education';
import Hobbies     from './components/Hobbies';
import Contact     from './components/Contact';
import Performance from './components/Performance';
import Analytics   from './components/Analytics';
import Footer      from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <>
      <ScrollProgress />
      <div className="flex flex-col min-h-screen bg-ivory dark:bg-navy">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow">
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider flip />
          <Skills />
          <SectionDivider />
          <Projects />
          <SectionDivider flip />
          <Experience />
          <SectionDivider />
          <Education />
          <SectionDivider flip />
          <Hobbies />
          <SectionDivider />
          <Contact />
          <Performance />
          <Analytics />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

