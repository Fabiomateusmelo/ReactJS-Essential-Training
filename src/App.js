import './App.css';
import { useState, useEffect } from "react";



function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`Essa é a emoção ${emotion}`);
  }, [emotion ]);
  useEffect(() => {
    console.log(`Essa é a emoção ${secondary}`);
  }, [secondary]);

  return (
    <div className="App">
      <h1>A emoção primária é {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad
      </button>
      <button onClick={() => setEmotion("excited")}>Excited
      </button>
        <h2>
          A emoção secundária é {secondary}.
        </h2>
        <button onClick={() => setSecondary("grateful")}>Grateful</button>
    </div>
  );
}

export default App;
