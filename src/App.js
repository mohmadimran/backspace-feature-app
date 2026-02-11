// src/App.js
import React, { useEffect, useState, useCallback } from "react";

export default function App() {
  const [text, setText] = useState("");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleLetterClick = (letter) => {
    setText((prev) => prev + letter);
  };

  const handleBackspace = useCallback(() => {
    setText((prev) => prev.slice(0, -1));
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      const key = e.key.toUpperCase();

      if (alphabet.includes(key)) {
        setText((prev) => prev + key);
      }

      if (e.key === "Backspace") {
        handleBackspace();
      }
    },
    [alphabet, handleBackspace]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Alphabet Builder</h1>

      <div
        style={{
          minHeight: "50px",
          border: "1px solid black",
          margin: "20px auto",
          width: "400px",
          padding: "10px",
          fontSize: "24px"
        }}
      >
        {text}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 60px)",
          justifyContent: "center",
          gap: "10px"
        }}
      >
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            style={{ padding: "10px", fontSize: "18px" }}
          >
            {letter}
          </button>
        ))}

        <button
          onClick={handleBackspace}
          style={{
            gridColumn: "span 7",
            padding: "10px",
            fontSize: "18px",
            background: "#ff4d4d",
            color: "white"
          }}
        >
          Backspace
        </button>
      </div>
    </div>
  );
}
