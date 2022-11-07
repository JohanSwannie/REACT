import React, { useState } from "react";
import ClassComponentWithContext from './ClassComponentWithContext';
import FunctionComponentWithContext from './FunctionComponentWithContext';
import './App.css';

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
    if (darkTheme) {
      document.body.style.backgroundColor = 'lightseagreen';
      document.getElementById('butty').style.backgroundColor = 'navy';
    } else {
      document.body.style.backgroundColor = 'steelblue';
      document.getElementById('butty').style.backgroundColor = 'skyblue';
    }
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme} >
      <div className="wrapper">
        <button id='butty' onClick={toggleTheme}>Toggle Theme</button>
        <FunctionComponentWithContext />
        <ClassComponentWithContext />
      </div>
      </ThemeContext.Provider>
    </div>
  );
}
