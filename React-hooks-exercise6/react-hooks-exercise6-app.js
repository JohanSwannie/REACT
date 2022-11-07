import React, { useState } from "react";
import FunctionComponentWithContext from './FunctionComponentWithContext';
import ClassComponentWithContext from './ClassComponentWithContext';
import './App.css';

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme} >
      <div className="wrapper">
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionComponentWithContext />
        <ClassComponentWithContext />
      </div>
      </ThemeContext.Provider>
    </div>
  );
}
