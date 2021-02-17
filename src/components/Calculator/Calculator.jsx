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
      setResult(calculatorOperations[operation](parseInt(prevValue), parseInt(nextValue)));
    }

    if (value === "AC") {
      clearData();
    }

  }

  return (
    <div className="calculator">
      <div className="calculator__input">
        <div className="result">
          {screen}|||
          {result}
        </div>
      </div>

      <div className="calculator__keys">
        <CalculatorKey keyValue={"AC"} onClick={handleClick} className="key-function clear" />
        <CalculatorKey keyValue={"<|"} onClick={handleClick} className="key-function delete" />
        <CalculatorKey keyValue={"%"} onClick={handleClick} className="key-function percent" />

        <CalculatorKey keyValue={"+"} onClick={handleClick} className="key-operator plus" />
        <CalculatorKey keyValue={"-"} onClick={handleClick} className="key-operator minus" />
        <CalculatorKey keyValue={"*"} onClick={handleClick} className="key-operator multi" />
        <CalculatorKey keyValue={"/"} onClick={handleClick} className="key-operator divide" />
        <CalculatorKey keyValue={"="} onClick={handleClick} className="key-operator equal" />

        <CalculatorKey
          className="key-number zero"
          keyValue={0}
          onClick={handleClick}
        />
        <CalculatorKey keyValue={1} onClick={handleClick} className="key-number one" />
        <CalculatorKey keyValue={2} onClick={handleClick} className="key-number two" />
        <CalculatorKey keyValue={3} onClick={handleClick} className="key-number three" />
        <CalculatorKey keyValue={4} onClick={handleClick} className="key-number four" />
        <CalculatorKey keyValue={5} onClick={handleClick} className="key-number five" />
        <CalculatorKey keyValue={6} onClick={handleClick} className="key-number six" />
        <CalculatorKey keyValue={7} onClick={handleClick} className="key-number seven" />
        <CalculatorKey keyValue={8} onClick={handleClick} className="key-number eight" />
        <CalculatorKey keyValue={9} onClick={handleClick} className="key-number nine" />
        <CalculatorKey
          className="dot"
          keyValue={"."}
          onClick={handleClick}
        />
          
      </div>
    </div>
  )
}
