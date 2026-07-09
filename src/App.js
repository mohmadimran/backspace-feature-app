import { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleBackspace = () => {
    setText((prev) => prev.slice(0, -1));
  };

  return (
    <div className="app-container">
      <h1>Alphabet Buttons</h1>
      <p className="subhead">Click letters</p>

      <div className="output">{text}</div>

      <div className="button-grid">
        {alphabets.map((letter) => (
          <button
            key={letter}
            className="btn btn-letter"
            onClick={() => setText((t) => t + letter)}
          >
            {letter}
          </button>
        ))}

        <button className="btn btn-backspace" onClick={handleBackspace}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
            <line x1="18" y1="9" x2="12" y2="15"/>
            <line x1="12" y1="9" x2="18" y2="15"/>
          </svg>
          Backspace
        </button>
      </div>
    </div>
  );
};

export default App;
