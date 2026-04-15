import './App.css'
import { useState } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="scene">
      <img src="/images/deskbg.png" className="background" />

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
    </div>
  );
}

export default App;