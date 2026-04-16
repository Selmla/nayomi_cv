import { useState } from 'react';

export default function HeroScene() {
  const [isClicked, setIsClicked] = useState(false);

  let audio;

  const playSound = () => {
    if (!audio) {
      audio = new Audio('/sounds/cup.mp3');
    }

    audio.currentTime = 0;
    audio.play();
  };

  return (
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
            Hi, I'm Nayomi. I design, organize, and bring ideas to life through code.
          </p>
        ) : (
          <p>
            Welcome to my portfolio. Explore by clicking around.
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
  );
}
