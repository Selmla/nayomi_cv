import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>

      <div className="polaroid-board">
        <ProjectCard
          title="The Frequency"
          subtitle="Interactive story engine"
          image="/images/theFrequency.png"
          imageAlt="The frequency project preview"
          direction="right"
          wip
          githubUrl="https://github.com/Selmla/the-frequency"
          demoUrl="https://the-frequency-yzbi.vercel.app/"
          notes={[
            'The Frequency is an interactive story engine where user choices drive a branching narrative.',
            'Built with React, Vite, Node.js, and a custom API layer, it uses a data-driven approach where scenes, choices, and flow are defined in JSON.',
          ]}
          stackContent={[
            'Built with React and Vite for the frontend, using custom CSS for the interactive scrapbook-inspired UI and animations.',
            'The project also includes a Node.js-powered API layer for loading and managing JSON-based story data and branching narrative flow.',
          ]}
          devNotesContent={[
            'I wanted something I could reuse for creating text stories',
            'and sharing them. So I built my own "enginge".'
          ]}
        />

        <ProjectCard
          title="Munamii Cakery"
          subtitle="HTML & CSS bakery website"
          image="/images/cakery.png"
          imageAlt="Munamii Cakery project preview"
          direction="left"
          href="https://selmla.github.io/cakery/index.html"
          showArrow
          notes={[
            'One of my first frontend projects where I focused on layout, visual styling, and creating a cozy atmosphere.',
          ]}
        />

        <ProjectCard
          title="Transaction Tracker"
          subtitle="C# console app for tracking income and expenses"
          image="/images/transactiontracker.png"
          imageAlt="Transaction Tracker project preview"
          direction="right"
          href="https://github.com/Selmla/TransactionTracker"
          notes={[
            'A console application built in C# to track income and expenses, focusing on logic, data handling, and clean structure.',
          ]}
        />

        <ProjectCard
          title="Character CV"
          subtitle="Playful retro CV inspired by games"
          image="/images/character-cv.png"
          imageAlt="Character CV project preview"
          direction="left"
          href="https://selmla.github.io/cv-site/"
          showArrow
          notes={[
            'A creative CV concept inspired by retro games, combining design, personality, and playful storytelling.',
          ]}
        />
      </div>
    </section>
  );
}
