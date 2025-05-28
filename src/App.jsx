import "./App.css";
import { useState } from "react";

const [counter, setCounter] = useState(0);

const App = () => {
  return (
    <>
      <header>
        <img src="" alt="" />
        <h1>React Counter</h1>
      </header>

      <main>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            setCounter((counter = 0));
          }}
        >
          RESET
        </button>

        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
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
