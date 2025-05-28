import "./App.css";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <header>
        <h1>React Counter</h1>c
      </header>
      <main>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>

        <button
          onClick={() => {
            setCounter(0);
          }}
        >
          RESET
        </button>

        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </main>

      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Greg</span>
        </p>
      </footer>
    </>
  );
};

export default App;
