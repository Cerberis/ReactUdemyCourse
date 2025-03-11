import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );

  function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(1);

    function AddCount() {
      setCount((c) => c + step);
    }

    function MinusCount() {
      if (count > step) {
        setCount((c) => c - step);
      }
    }

    function handleReset() {
      setCount(1);
      setStep(1);
    }

    return (
      <div>
        <div>
          <input
            type="range"
            value={step}
            min={0}
            max={10}
            onChange={(e) => setStep(Number(e.target.value))}
          ></input>
          <span>Step: {step}</span>
        </div>
        <div>
          <button onClick={MinusCount}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          ></input>
          <button onClick={AddCount}>+</button>
        </div>
        <Information count={count}></Information>
        <br />

        {(count !== 1 || step !== 1) && (
          <button onClick={handleReset}>Reset</button>
        )}
      </div>
    );
  }

  function Information({ count }) {
    if (count < 1) {
      return <p> Today is {Date.now()}</p>;
    }

    return (
      <span>
        {count} days from today is {FormattedDate(count)}
      </span>
    );
  }

  function FormattedDate(count) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = new Date();
    date.setDate(date.getDate() + count);
    return <span>{date.toLocaleDateString("en-US", options)}</span>;
  }
}

export default App;
