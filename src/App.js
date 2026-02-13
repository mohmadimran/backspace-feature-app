import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleBackspace = () => {
    setText((prev) => prev.slice(0, -1));
  };

  return (
   <>
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Alphabet Buttons</h1>
      <p>Click letters</p>

      <div style={{ marginBottom: "20px", fontSize: "24px" }} className="output">
        {text}
      </div>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
        {alphabets.map((letter) => (
          <button
            key={letter}
            onClick={() => setText((t) => t + letter)}
            style={{
              padding: "10px 14px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            {letter}
          </button>
        ))}

        <button
          onClick={handleBackspace}
          style={{
            padding: "10px 14px",
            fontSize: "18px",
            cursor: "pointer",
            backgroundColor: "#f88",
          }}
        >
          Backspace
        </button>
      </div>
    </div>
   </>
  );
};

export default App;
