import React from 'react';

import './CalculatorKey.css';

export const CalculatorKey = ({ keyValue, className, onClick }) => {
  return (
    <button
      className={`${className}`}
      onClick={() => onClick(keyValue)}
    >
      {keyValue}{" "}
    </button>
  )
}
