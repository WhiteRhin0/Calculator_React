import React, { useState, useEffect} from 'react';

import { CalculatorKey } from '../CalculatorKey';

export const Calculator = () => {
  const [result, setResult] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState("");
  const [operation, setOperation] = useState(null);
  const [screen, setScreen] = useState("0");

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ['*', '/', '+', '-'];

  useEffect(() => {}, [ prevValue, screen ]);

  const handleNumber = (number) => {
    setScreen(screen === "0" ? String(number) : screen + number);

  };

  const handleOperator = (operator) => {
    if (operators.includes(operator)) {
      setPrevValue(+screen);
      setOperation(operator);
      setScreen(`${screen} ${operator} `);

    }
  };

  const handleClick = (value) => {
    if (numbers.includes(value)) {
      handleNumber(value);
    }

    if (operators.includes(value) && !operators.includes(screen.trim()[screen.length - 1]) ) {
      handleOperator(value);
    }


  }

  return (
    <div className="calculator">
      <div className="calculator__input">
        <div className="result">
          {screen}
        </div>
      </div>

      <div className="keys-function">
          <CalculatorKey keyValue={"AC"} onClick={handleClick} className="key-function" />
          <CalculatorKey keyValue={"<|"} onClick={handleClick} className="key-function" />
          <CalculatorKey keyValue={"%"} onClick={handleClick} className="key-function" />
        </div>

        <div className="keys-operators">
          <CalculatorKey keyValue={"+"} onClick={handleClick} className="key-operator" />
          <CalculatorKey keyValue={"-"} onClick={handleClick} className="key-operator" />
          <CalculatorKey keyValue={"*"} onClick={handleClick} className="key-operator" />
          <CalculatorKey keyValue={"/"} onClick={handleClick} className="key-operator" />
          <CalculatorKey keyValue={"="} onClick={handleClick} className="key-operator" />
        </div>

        <div className="keys-numbers">
          <CalculatorKey keyValue={9} onClick={handleClick} className="key-number" />
          <CalculatorKey keyValue={8} onClick={handleClick} className="key-number" />
          <CalculatorKey keyValue={7} onClick={handleClick} className="key-number" />
          <CalculatorKey keyValue={6} onClick={handleClick} className="key-number" />
          <CalculatorKey keyValue={5} onClick={handleClick} className="key-number" />
          <CalculatorKey keyValue={4} onClick={handleClick} className="key-number" />
          <CalculatorKey keyValue={3} onClick={handleClick} className="key-number" />
          <CalculatorKey keyValue={2} onClick={handleClick} className="key-number" />
          <CalculatorKey keyValue={1} onClick={handleClick} className="key-number" />
          <CalculatorKey
            className="key-dot"
            keyValue={"."}
            onClick={handleClick}
          />
          <CalculatorKey
            className="key-zero"
            keyValue={0}
            onClick={handleClick}
          />
        </div>
    </div>
  )
}
