import React, { useState, useEffect } from 'react';

export default function DisplayArray({ setDigits }) {
  const [arrayOfDigits, setArrayOfDigits] = useState([]);

  useEffect(() => {
    setArrayOfDigits(setDigits());
  }, [setDigits]);

  return (
    arrayOfDigits.map(number => <div key={number}>{number}</div>)
  );
};
