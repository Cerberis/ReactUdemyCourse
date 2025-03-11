import React, { useState } from "react";

export function Calculator() {
  const [bill, setBill] = useState(null);
  const [serviceLikability, setServiceLikability] = useState(0);
  const [friendServiceLikability, setFriendServiceLikability] = useState(0);

  function handleReset() {
    setBill(0);
    setServiceLikability(0);
    setFriendServiceLikability(0);
  }

  return (
    <React.Fragment>
      <Bill bill={bill} onBillChange={setBill}></Bill>
      <Service value={serviceLikability} onChange={setServiceLikability}>
        How did you like the service?
      </Service>
      <Service
        value={friendServiceLikability}
        onChange={setFriendServiceLikability}
      >
        How did your friend like the service?
      </Service>
      <Information
        bill={bill}
        servicePercentage={serviceLikability}
        friendServicePercentage={friendServiceLikability}
      ></Information>
      <div style={{ "margin-top": "10px" }}>
        <button onClick={handleReset}>Reset</button>
      </div>
    </React.Fragment>
  );
}

function Bill({ bill, onBillChange }) {
  function HandleChange(value) {
    const numericValue = Number(value);
    if (!isNaN(numericValue)) onBillChange(numericValue);
  }

  return (
    <React.Fragment>
      <p>How much was the bill?</p>
      <input
        placeholder="Bill value"
        type="text"
        value={bill}
        onChange={(e) => HandleChange(e.target.value)}
      ></input>
    </React.Fragment>
  );
}

function LikabilityDropdown({ value, onChange }) {
  function handleChange(value) {
    const isNumber = Number(value);
    if (!isNaN(isNumber)) onChange(Number(value));
  }

  return (
    <select
      value={value}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    >
      <option value="0">Dissatisfied (0%)</option>
      <option value="5">It was okay (5%)</option>
      <option value="10">It was good (10%)</option>
      <option value="20">Absolutely amazing! (20%)</option>
    </select>
  );
}

function Service({ children, value, onChange }) {
  return (
    <React.Fragment>
      <p>{children}</p>
      <LikabilityDropdown
        value={value}
        onChange={onChange}
      ></LikabilityDropdown>
    </React.Fragment>
  );
}

function Information({ bill, servicePercentage, friendServicePercentage }) {
  if (!bill || bill === 0) {
    return;
  }

  const tipAverage = Math.round(
    (servicePercentage + friendServicePercentage) / 2,
    0
  );
  const tipsInDollars = Math.round((bill * tipAverage) / 100, 2);
  const totalAmount = bill + tipsInDollars;
  const tipsText =
    tipsInDollars > 0 ? `($${bill} + $${tipsInDollars} tip)` : "";
  return (
    <h3>
      You pay ${totalAmount} {tipsText}
    </h3>
  );
}
