import React, { useState } from 'react';
import DisplayArray from './DisplayArray';
import './App.css';

export default function App() {
  const [digit, setDigit] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const setDigits = () => {
    if (!isNaN(digit) && digit > 0) {
      return [digit, digit * 2, digit * 3, digit * 4, digit * 5, digit * 6, digit * 7, digit * 8];
    } else {
      return ['Enter a valid Numeric value please!'];
    }
  };

  const setThemeStyle = {
    color: darkTheme ? '#FFF' : '#000',
    backgroundColor: darkTheme ? '#000' : 'lightseagreen'
  };

  function handleInput(event) {
    event.preventDefault();
    setDigit(parseInt(event.target.value));
  }

  return (
    <div className="App" style={setThemeStyle}>
      <input type="number" value={digit} onChange={handleInput} />
      <button onClick={() => setDarkTheme(prevDarkTheme => !prevDarkTheme)}>Toggle Theme</button>
      <DisplayArray setDigits={setDigits} />
      <img src="https://img.freepik.com/premium-vector/math-background_23-2148147194.jpg?w=2000" alt="Maths" style={{width: "50vw"}} />
    </div>
  );
}
