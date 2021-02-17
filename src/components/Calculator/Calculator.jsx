import React, { useState, useEffect} from 'react';

import './Calculator.css';
import { CalculatorKey } from '../CalculatorKey';

export const Calculator = () => {
  const [result, setResult] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [screen, setScreen] = useState("0");

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ['*', '/', '+', '-'];

  const calculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  useEffect(() => {}, [ prevValue, screen ]);

  const handleNumber = (number) => {
    setScreen(screen === "0" ? String(number) : screen + number);

    setNextValue(nextValue === null ? String(number) : nextValue + number);
  };

  const handleOperator = (operator) => {
    setScreen(screen + operator);
    setOperation(operator);
    setPrevValue(nextValue);
    setNextValue(null);
  }

  const clearData = () => {
    setNextValue(null);
    setPrevValue(null);
    setScreen("0")
  }

  const handleClick = (value) => {
    if (numbers.includes(value)) {
      handleNumber(value);
    }

    if (value in calculatorOperations && value !== '=') {
      handleOperator(value)
    }

    if (value === '=') {
      setNextValue(calculatorOperations[value](prevValue, nextValue));
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
