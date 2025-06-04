import "./App.css";
import { useState } from "react";
import { FaCalculator } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <header>
        <FaCalculator className="logo" />
        <h1>React Counter</h1>
      </header>
      <main className="container">
        <div>
          <FaMinus
            className="operator"
            onClick={() => {
              setCounter(counter - 1);
            }}
          />
          <p className="counter">{counter}</p>
          <FaPlus
            className="operator"
            onClick={() => {
              setCounter(counter + 1);
            }}
          />
        </div>
        <div>
          <button
            className="reset"
            onClick={() => {
              setCounter(0);
            }}
          >
            Reset
          </button>
        </div>
      </main>
      <footer className="container">
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Greg</span>
        </p>
      </footer>
    </>
  );
};

export default App;
