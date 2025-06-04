import "./App.css";
import { useState } from "react";
import { FaCalculator } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const App = () => {
  return (
    <>
      <header>
        <FaCalculator className="logo" />
        <h1>React Counter</h1>
      </header>
      <main className="container">
        <div>
          <FaMinus className="operator" />
          <p className="counter">0</p>
          <FaPlus className="operator" />
        </div>
        <div>
          <button className="reset">Reset</button>
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
