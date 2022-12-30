import { useState, useCallback } from 'react';
import DisplayArray from './DisplayArray';

export default function App() {
  const [digit, setDigit] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const setDigits = useCallback((multiplier) => {
    if (!isNaN(digit) && digit > 0) {
      return [digit, digit * multiplier, ((digit * 2) * multiplier), ((digit * 4)  * multiplier),
             ((digit * 6) * multiplier), ((digit * 8) * multiplier), ((digit * 10) * multiplier)];
    } else {
      return ['Enter a valid Numeric value please!'];
    }
  }, [digit]);

  const setThemeStyle = {
    color: darkTheme ? '#FFF' : '#000',
    backgroundColor: darkTheme ? 'navy' : 'lightseagreen',
    fontSize: darkTheme ? '1.5rem' : '1rem'
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
      {darkTheme ?
         <img src="https://img.freepik.com/premium-vector/math-background_23-2148147194.jpg?w=2000" alt="Maths2" /> :
         <img src="https://t3.ftcdn.net/jpg/04/05/80/88/360_F_405808828_lwfcYW72K3i3IsZQayyHg9kEqHpRrrET.jpg" alt="Maths1" />
      }
    </div>
  );
}
