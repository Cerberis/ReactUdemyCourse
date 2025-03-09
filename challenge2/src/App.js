import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <Steps></Steps>
      <DaysFromNow></DaysFromNow>
      <Information></Information>
    </div>
  );

  function AddStep() {
    setStep((s) => s + 1);
  }

  function MinusStep() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function Steps() {
    return (
      <div>
        <button onClick={MinusStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={AddStep}>+</button>
      </div>
    );
  }

  function AddCount() {
    setCount((c) => c + step);
  }

  function MinusCount() {
    if (count > step) {
      setCount((c) => c - step);
    }
  }

  function DaysFromNow() {
    return (
      <div>
        <button onClick={MinusCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={AddCount}>+</button>
      </div>
    );
  }

  function Information() {
    if (count < 1) {
      return <p> Today is {Date.now()}</p>;
    }

    return (
      <span>
        {count} days from today is {FormattedDate()}
      </span>
    );
  }

  function FormattedDate() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = new Date();
    date.setDate(date.getDate() + count);
    return <div>{date.toLocaleDateString("en-US", options)}</div>;
  }
}

export default App;
