import React, { useContext } from "react";
import {ThemeContext} from './App';

export default function FunctionComponentWithContext() {
  const functionThemeDark = useContext(ThemeContext);
  const functionThemeStyles = {
    backgroundColor: functionThemeDark ? '#000' : 'skyblue',
    color: functionThemeDark ? '#FFF' : '#000',
    padding: '4rem',
    border: functionThemeDark ? '12px solid white' : '12px solid black',
    borderStyle: functionThemeDark ? 'dotted' : 'double',
    outlineStyle: 'double',
    margin: '2rem'
  };
  return (
    <div style={functionThemeStyles}>Functional Component Theme</div>
  )
}
