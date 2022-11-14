import React, { useState } from "react";
import ClassComponentWithContext from './ClassComponentWithContext';
import FunctionComponentWithContext from './FunctionComponentWithContext';
import './App.css';

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [counter, setCounter] = useState(0);
  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
    setCounter(prevCounter => prevCounter + 1);
    if (darkTheme) {
      document.body.style.backgroundColor = 'lightseagreen';
      document.getElementById('butty').style.backgroundColor = 'navy';
      document.getElementById('butty').style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'steelblue';
      document.getElementById('butty').style.backgroundColor = 'skyblue';
      document.getElementById('butty').style.color = 'black';
    }
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme} >
      <div style={{width: '40%', marginLeft: '30%', marginRight: '30%'}}>
        <button id='butty' onClick={toggleTheme}>Toggle Theme</button>
        <p className='cntr'>Toggle Counter = {counter}</p>
        <FunctionComponentWithContext />
        <ClassComponentWithContext />
      </div>
      </ThemeContext.Provider>
    </div>
  );
}
