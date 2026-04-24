import './App.css';
import HeroScene from './HeroScene';
import ProjectsSection from './ProjectsSection';
import Contact from './Contact';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <HeroScene />
      <ProjectsSection />
      <Contact />
      <Analytics />
    </>
  );
}

export default App;
