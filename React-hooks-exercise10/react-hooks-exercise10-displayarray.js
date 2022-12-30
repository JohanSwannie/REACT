import { useState, useEffect } from 'react';

export default function DisplayArray({ setDigits }) {
  const [arrayOfDigits, setArrayOfDigits] = useState([]);

  useEffect(() => {
    setArrayOfDigits(setDigits(19));
  }, [setDigits]);

   return arrayOfDigits.map(number => <div key={number}>{number}</div>)
};
