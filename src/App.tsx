import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Education } from '@/sections/Education';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
