import React from 'react';

export const CalculatorKey = ({ keyValue, className, onClick }) => {
  return (
    <button
      className={`${className}`}
      onClick={()=> onClick(keyValue)}
    >
      {keyValue}{" "}
    </button>
  )
}