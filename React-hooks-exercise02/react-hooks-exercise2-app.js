import React, { useState, useEffect } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowOuterWidth, setWindowOuterWidth] = useState(window.outerWidth);
  const [windowOuterHeight, setWindowOuterHeight] = useState(window.outerHeight);
  const [windowDocument, setWindowDocument] = useState(window.document.URL);
  const [counter, setCounter] = useState(0);

  const handleWindowChange = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    setWindowOuterWidth(window.outerWidth);
    setWindowOuterHeight(window.outerHeight);
    setWindowDocument(window.document.URL);
    setCounter(prevCounter => prevCounter + 1);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowChange);
    return () => {
      window.removeEventListener('resize', handleWindowChange);
    };
  }, []);

  return (
    <div className="App" style={{background: "lightyellow", height: "95vh", border: "10px solid #000", borderStyle: "double"}}>
      <p style={{background: "skyblue"}}>Window Inner Width: {windowWidth}</p>
      <p style={{background: "crimson"}}>Window Inner Height: {windowHeight}</p>
      <p style={{background: "gray"}}>Window Outer Width: {windowOuterWidth}</p>
      <p style={{background: "peachpuff"}}>Window Outer Height: {windowOuterHeight}</p>
      <p style={{background: "lightgreen"}}>Window Document: {windowDocument}</p>
      <p style={{color: '#FFF', background: "black"}}>Window Size has now changed {counter} times</p>
    </div>
  );
}
