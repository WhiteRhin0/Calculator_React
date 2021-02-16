import React, { useState, useEffect} from 'react';

import { CalculatorKey } from '../CalculatorKey';

export const Calculator = () => {
  const [result, setResult] = useState('0');
  const [prevValue, setPrevValue] = useState(0);
  const [nextValue, setNextValue] = useState("");
  const [operation, setOperation] = useState(null);

  useEffect(() => {}, [operation, nexValue, prevValue])

  return (
    <div className="calculator">
      <div className="calculator__input">
        <div className="result">
          {result}
        </div>
      </div>

      <div className="keys-function">
          <CalculatorKey keyValue={"AC"} onClick={handleOperation} className="key-function" />
          <CalculatorKey keyValue={"<|"} onClick={handleOperation} className="key-function" />
          <CalculatorKey keyValue={"%"} onClick={handleOperation} className="key-function" />
        </div>

        <div className="keys-operators">
          <CalculatorKey keyValue={"+"} onClick={handleOperation} className="key-operator" />
          <CalculatorKey keyValue={"-"} onClick={handleOperation} className="key-operator" />
          <CalculatorKey keyValue={"*"} onClick={handleOperation} className="key-operator" />
          <CalculatorKey keyValue={"/"} onClick={handleOperation} className="key-operator" />
          <CalculatorKey keyValue={"="} onClick={handleOperation} className="key-operator" />
        </div>

        <div className="keys-numbers">
          <CalculatorKey keyValue={9} onClick={handleOperation} className="key-number" />
          <CalculatorKey keyValue={8} onClick={handleOperation} className="key-number" />
          <CalculatorKey keyValue={7} onClick={handleOperation} className="key-number" />
          <CalculatorKey keyValue={6} onClick={handleOperation} className="key-number" />
          <CalculatorKey keyValue={5} onClick={handleOperation} className="key-number" />
          <CalculatorKey keyValue={4} onClick={handleOperation} className="key-number" />
          <CalculatorKey keyValue={3} onClick={handleOperation} className="key-number" />
          <CalculatorKey keyValue={2} onClick={handleOperation} className="key-number" />
          <CalculatorKey keyValue={1} onClick={handleOperation} className="key-number" />
          <CalculatorKey
            className="key-dot"
            keyValue={"."}
            onClick={handleOperation}
          />
          <CalculatorKey
            className="key-zero"
            keyValue={0}
            onClick={handleOperation}
          />
        </div>
    </div>
  )
}
