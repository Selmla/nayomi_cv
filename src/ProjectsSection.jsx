import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>

      <div className="polaroid-board">
        <ProjectCard
          title="Ride & Read"
          subtitle="Private date-invitation app"
          image="/images/date.png"
          imageAlt="Ride & Read app preview"
          direction="left"
          showArrow
          githubUrl="https://github.com/Selmla/RideAndRead"
          demoUrl="https://ride-and-read.vercel.app/"
          notes={[
            "A date-request app built around a fun idea from social media — asking someone out without the awkward part. The sender picks dates and activities, the recipient chooses what they're in for, and you both find out at the same time.",
          ]}
          stackContent={[
            'Built with React 19 and Vite.',
            "Firebase Firestore handles real-time invitation state — both screens update instantly the moment the recipient taps 'I'm in'.",
            'No accounts, no personal data stored. The app is intentionally minimal — just an invitation, a choice, and a confirmed plan.',
            'Deployed on Vercel.',
          ]}
          devNotesContent={[
            "The idea came from social media — and a very real feeling. Asking someone out can be awkward, especially if you're not sure they feel the same way.",
            "I wanted to build something that takes the pressure off both sides. You put in the effort of crafting an invitation, they get to say yes on their own terms, and neither of you has to sit through an uncomfortable moment.",
          ]}
        />

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
          title="TimeTraveler"
          subtitle="Trip timeline & deadline planning assistant"
          image="/images/timetraveler.jpg"
          imageAlt="TimeTraveler app preview"
          direction="left"
          wip
          showArrow
          githubUrl="https://github.com/Selmla/time-traveler"
          notes={[
            'Built to solve a real gap in travel tools — Google Maps handles navigation, but nothing helps you reason about whether your whole day still holds together when plans shift.',
            'Integrates with the Google Maps API for live ETA data, with a local-first architecture built around deadlines, buffers, and real-time timeline recalculations.',
          ]}
          stackContent={[
            'Frontend built with React + Vite and Tailwind CSS.',
            'Integrates with the Google Maps API for live navigation data and ETA calculations.',
            'Local-first architecture with timeline-based logic — all recalculations happen on the client, keeping the experience fast and responsive.',
          ]}
          devNotesContent={[
            'The idea came from genuine frustration: every travel planner I tried could navigate between stops, but none could answer "does my whole day still work?" when something changes.',
            "I wanted to explore timeline logic, deadline reasoning, and what it actually feels like to build something useful to me. It's also been my first serious experiment with AI-assisted development — using it to prototype and iterate faster than I ever have before.",
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
