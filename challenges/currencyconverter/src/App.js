// ``

import { useEffect, useState } from "react";

export default function App() {
  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [currencyValue, setCurrencyValue] = useState(1);
  const [convertedValue, setConvertedValue] = useState(0);

  useEffect(
    function () {
      async function convertCurrency() {
        if (currencyFrom === currencyTo) {
          setConvertedValue(currencyValue);
          return;
        }
        if (currencyValue <= 0) {
          setConvertedValue(0);
          return;
        }
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${currencyValue}&from=${currencyFrom}&to=${currencyTo}`
        );

        const data = await res.json();
        console.log(data);
        const foundConvertedValue = data.rates[currencyTo];
        setConvertedValue(foundConvertedValue);
      }

      convertCurrency();
    },
    [currencyFrom, currencyTo, currencyValue]
  );

  return (
    <div>
      <input
        type='number'
        value={currencyValue}
        onChange={(e) => setCurrencyValue(Number(e.target.value))}
      />
      <CurrencyDropdown
        defaultValue={currencyFrom}
        onChange={setCurrencyFrom}
      ></CurrencyDropdown>
      <CurrencyDropdown
        defaultValue={currencyTo}
        onChange={setCurrencyTo}
      ></CurrencyDropdown>

      <p>Converts to: {convertedValue}</p>
    </div>
  );
}

function CurrencyDropdown({ onChange, defaultValue }) {
  return (
    <select onChange={(e) => onChange(e.target.value)} value={defaultValue}>
      <option value='USD'>USD</option>
      <option value='EUR'>EUR</option>
      <option value='CAD'>CAD</option>
      <option value='INR'>INR</option>
    </select>
  );
}
