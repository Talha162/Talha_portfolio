import { lazy, Suspense, useEffect, useState } from "react";
import { SEO } from "@/components/layout/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { BackToTop } from "@/components/layout/BackToTop";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Hero } from "@/components/sections/Hero";

const About = lazy(() =>
  import("@/components/sections/About").then((m) => ({ default: m.About })),
);
const Skills = lazy(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills })),
);
const Experience = lazy(() =>
  import("@/components/sections/Experience").then((m) => ({ default: m.Experience })),
);
const Projects = lazy(() =>
  import("@/components/sections/Projects").then((m) => ({ default: m.Projects })),
);
const Education = lazy(() =>
  import("@/components/sections/Education").then((m) => ({ default: m.Education })),
);
const Certifications = lazy(() =>
  import("@/components/sections/Certifications").then((m) => ({
    default: m.Certifications,
  })),
);
const LanguagesSection = lazy(() =>
  import("@/components/sections/Languages").then((m) => ({ default: m.Languages })),
);
const Services = lazy(() =>
  import("@/components/sections/Services").then((m) => ({ default: m.Services })),
);
const Testimonials = lazy(() =>
  import("@/components/sections/Testimonials").then((m) => ({
    default: m.Testimonials,
  })),
);
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
);

function SectionFallback() {
  return <div className="py-28" aria-hidden="true" />;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <SEO />
      <LoadingScreen loading={loading} />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <LanguagesSection />
          <Services />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
