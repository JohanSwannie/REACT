import './App.css';
import React, { useState, useRef } from "react";

  const Fillin = () => {
    return (
      <div>
      <h1> Hello Everyone</h1>
      </div>
    );
  }

 function App() {
   const [surname, setSurname] = useState('Brown');
   const [sport, setSport] = useState('Tennis');
   const changeCounter = useRef(0);
   const h2Ref = useRef();
   const h3Ref = useRef();
   const sportChoice = ['Rugby', 'Cricket', 'Football', 'Netball', 'Baseball', 'Basketball',
                        'Swimming', 'Gymnastics', 'Athletics', 'Tennis', 'Tabletennis', 'Wrestling',
                        'Boxing', 'Skiing', 'Volleyball'];
   const changeSurname = () => {
     changeCounter.current = changeCounter.current + 1;
     if (changeCounter.current % 2 === 0) {
       setSurname('Cooper');
       h2Ref.current.style.background = "crimson";
       h3Ref.current.style.border = "10px solid white";
       h3Ref.current.style.borderStyle = "double";
       setSport(sportChoice[Math.floor(Math.random() * sportChoice.length)]);
     } else {
       setSurname('Brown');
       h2Ref.current.style.background = "navy";
       h3Ref.current.style.border = "none";
       setSport(sportChoice[Math.floor(Math.random() * sportChoice.length)]);
     }
   }
  return (
    <div className="App">
      <h2 ref={h2Ref}>Hello Darren {surname}</h2>
      <button onClick={changeSurname}>Change Surname</button>
      <h3 ref={h3Ref}>Counter is {changeCounter.current}</h3>
      <h4>{sport}</h4>
      <Fillin />
    </div>
  );
}

export default App;
