import { useState, useEffect } from 'react';

export default function DisplayArray({ setDigits }) {
  const [arrayOfDigits, setArrayOfDigits] = useState([]);

  useEffect(() => {
    setArrayOfDigits(setDigits(4));
  }, [setDigits]);

   return (
     <div>
      <ul>
     {arrayOfDigits.map(number => {
      return <li key={number}style={{listStyle: 'none'}}>{number}</li>
     })}
      </ul>
    </div>)

};
