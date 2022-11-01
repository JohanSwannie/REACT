import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowOuterWidth, setWindowOuterWidth] = useState(window.outerWidth);
  const [windowOuterHeight, setWindowOuterHeight] = useState(window.outerHeight);
  const [windowDocument, setWindowDocument] = useState(window.document.URL);

  const handleWindowChange = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    setWindowOuterWidth(window.outerWidth);
    setWindowOuterHeight(window.outerHeight);
    setWindowDocument(window.document.URL);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowChange);
    return () => {
      window.removeEventListener('resize', handleWindowChange);
    }
  }, []);

  return (
    <div className="App" style={{background: "lightyellow", height: "95vh", border: "10px solid #000", borderStyle: "double"}}>
      <p style={{background: "skyblue"}}>Window Width: {windowWidth}</p>
      <p style={{background: "crimson"}}>Window Height: {windowHeight}</p>
      <p style={{background: "gray"}}>Window Outer Width: {windowOuterWidth}</p>
      <p style={{background: "peachpuff"}}>Window Outer Height: {windowOuterHeight}</p>
      <p style={{background: "lightgreen"}}>Window Document: {windowDocument}</p>
    </div>
  );
}

export default App;
