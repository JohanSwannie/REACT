import React, { useState, useTransition } from 'react';
import './App.css';

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [myInput, setMyInput] = useState('');
  const [array, setArray] = useState([]);

  const ARRAY_LENGTH = 50000;

  function handleChange(event) {
    event.preventDefault();
    setMyInput(event.target.value);
    startTransition(() => {
      const list = [];
      for (var i = 0; i < ARRAY_LENGTH; i++) {
        list.push(event.target.value);
      }
      setArray(list);
    });
  }
  return (
    <div className="App">
      <input type="text" value={myInput} autoFocus onChange={handleChange} />
      {isPending ? " Input Loading..."
       : array.map((element, index) => {
         return <div key={index} style={{fontSize: '60px', color: 'red', fontFamily: 'Tangerine'}}>{element}</div>
       })}
    </div>
  );
}
