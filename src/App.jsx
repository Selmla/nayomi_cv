import './App.css'
import { useState } from 'react';


function App() {
  const [isClicked, setIsClicked] = useState(false);

  let audio;

  const playSound = () => {
    if (!audio) {
      audio = new Audio("/sounds/cup.mp3");
    }

    audio.currentTime = 0;
    audio.play();
  };

  return (
    <>
      <div className="scene">
        <img src="/images/deskbg.png" className="background" />

        <div className="steam">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className="hotspot cup"
          onClick={playSound}
        ></div>

        <div className="screen-text">
          {isClicked ? (
            <p>
              Hi, I'm Nayomi. I enjoy turning ideas into real experiences through code and design.
            </p>
          ) : (
            <p>
              Welcome to Nayomi's portfolio. Click the screen to begin.
            </p>
          )}
        </div>

        <div
          className="hotspot screen"
          onClick={() => setIsClicked(true)}
        ></div>

        <div className="scroll-hint">
          ↓
        </div>
      </div>

      <section className="projects-section">
        <h2>Projects</h2>

        <div className="polaroid-board">

          <div className="polaroid-row left">
            <div className="project-item">
              <a
                className="polaroid"
                href="https://selmla.github.io/cakery/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/cakery.png" alt="Munamii Cakery project preview" />

                <div className="polaroid-caption">
                  <h3>Munamii Cakery</h3>
                  <p>HTML & CSS bakery website</p>
                </div>
              </a>

              <div className="project-note">
                <p>
                  One of my first frontend projects where I focused on layout,
                  visual styling, and creating a cozy atmosphere.
                </p>
                <img src="/images/arrow.png" alt="" className="arrow" />
              </div>
            </div>
          </div>

          <div className="polaroid-row right">
            <div className="project-item">

              <div className="project-note">
                <p>
                  A console application built in C# to track income and expenses,
                  focusing on logic, data handling, and clean structure.
                </p>
              </div>

              <div
                className="polaroid"
                onClick={() => alert("Open Transaction Tracker")}
              >
                <img
                  src="/images/transactiontracker.png"
                  alt="Transaction Tracker project preview"
                />
                <div className="polaroid-caption">
                  <h3>Transaction Tracker</h3>
                  <p>C# console app for tracking income and expenses</p>
                </div>
              </div>

            </div>
          </div>

          <div className="polaroid-row left">
            <div className="project-item">

              <div
                className="polaroid"
                onClick={() => alert("Open Character CV")}
              >
                <img src="/images/character-cv.png" alt="Character CV project preview" />
                <div className="polaroid-caption">
                  <h3>Character CV</h3>
                  <p>Playful retro CV inspired by games</p>
                </div>
              </div>

              <div className="project-note">
                <p>
                  A creative CV concept inspired by retro games, combining design,
                  personality, and playful interaction.
                </p>
                <img src="/images/arrow.png" alt="" className="arrow" />
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default App;