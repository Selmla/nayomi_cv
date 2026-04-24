import './App.css';
import HeroScene from './HeroScene';
import ProjectsSection from './ProjectsSection';
import Contact from './Contact';
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <>
      <HeroScene />
      <ProjectsSection />
      <Contact />
    </>
  );
}

export default App;
