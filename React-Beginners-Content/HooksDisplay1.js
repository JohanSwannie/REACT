import React, { useState } from 'react';

const HooksDisplay1 = () => {

  const [displayText1, setDisplayText1] = useState('Hello number 1');
  const [showText, setShowText] = useState(true);
  const [counter1, setCounter1] = useState(0);

  const handleChange1 = (event) => {
    setDisplayText1(event.target.value);
  };

  const handleClick1 = () => {
    setCounter1(counter1 + 1);
  };

  const handleClick2 = () => {
    setCounter1(counter1 - 1);
  };

  return (
    <div className="hooks1">
      <h2>Hooks Display 1</h2>
      <input type='text' placeholder='enter text' onChange={handleChange1} /><br />
      <p>Text = {displayText1}</p>
      <hr />
      <button onClick={handleClick1}>Increment Counter</button><br /><br />
      Counter = {counter1}<br /><br />
      <button onClick={handleClick2}>Decrement Counter</button><br /><br />
      <hr />
      <button onClick={() => {
        setShowText(!showText);
      }}>CLICK ME</button>
      <p>{showText && <p>Hello Johannes</p>}</p>
    </div>
  );
}

export default HooksDisplay1;
