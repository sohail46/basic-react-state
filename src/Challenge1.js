import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  // return <div>TEST</div>
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("Jan 07 2025");
  date.setDate(date.getDate() + count);

  function handlePreviousStep() {
    setStep((s) => s - 1);
  }

  function handleNextStep() {
    setStep((s) => s + 1);
  }

  function handlePreviousCount() {
    setCount((c) => c - step);
  }

  function handleNextCount() {
    setCount((c) => c + step);
  }

  return (
    <div>
      <p className="message">
        <button className="minus" onClick={handlePreviousStep}>
          -
        </button>
        Step {step}
        <button className="plus" onClick={handleNextStep}>
          +
        </button>
        <br />
        <br />
        <button className="minusCount" onClick={handlePreviousCount}>
          -
        </button>
        Count {count}
        <button className="plusCount" onClick={handleNextCount}>
          +
        </button>
        <br />
        <br />
        {count} days from today is {date.toDateString()}
      </p>
    </div>
  );
}
