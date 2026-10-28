import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Education } from "./sections/Education";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Achievements } from "./sections/Achievements";
import { Leadership } from "./sections/Leadership";
import { Certifications } from "./sections/Certifications";
import { Contact } from "./sections/Contact";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Leadership />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
