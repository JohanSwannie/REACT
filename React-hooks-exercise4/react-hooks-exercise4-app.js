import './App.css';
import React, { useState, useRef } from "react";

  const Fillin = () => {
    return (
      <div>
      <h1> Hello Dennis</h1>
      </div>
    );
  }

 function App() {
   const [surname, setSurname] = useState('Brown');
   const changeCounter = useRef(0);
   const h2Ref = useRef();
   const h3Ref = useRef();

   const changeSurname = () => {
     changeCounter.current = changeCounter.current + 1;
     if (changeCounter.current % 2 === 0) {
       setSurname('Cooper');
       h2Ref.current.style.background = "crimson";
       h3Ref.current.style.border = "10px solid white";
       h3Ref.current.style.borderStyle = "double";
     } else {
       setSurname('Brown');
       h2Ref.current.style.background = "navy";
       h3Ref.current.style.border = "none";
     }
   }
  return (
    <div className="App">
      <h2 ref={h2Ref}>Hello Darren {surname}</h2>
      <button onClick={changeSurname}>Change Surname</button>
      <h3 ref={h3Ref}>Counter is {changeCounter.current}</h3>
      <Fillin />
    </div>
  );
}

export default App;
