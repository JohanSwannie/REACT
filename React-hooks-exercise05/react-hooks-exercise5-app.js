import React, { useState, useMemo, useRef } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  const inputRef = useRef();
  const [message, setMessage] = useState('');
  const messages = ['important', 'urgent', 'for all ages', 'for all children',
                    'for people older than 75', 'for all citizens',
                    'for people that are poor', 'for people that are rich',
                    'for people that enjoy nature', 'for people that are blind',
                    'for people with diabetes', 'for people with heart problems'];

  const tripleCount = useMemo(() => {
    return tripleTheCount(counter);
  }, [counter]);

  const styleOfBody = useMemo(() => {
    return {
      backgroundColor: darkTheme ? 'rebeccapurple' : 'lightskyblue',
    };
  }, [darkTheme]);

  const styleOfBox = useMemo(() => {
    return {
      backgroundColor: darkTheme ? '#000' : '#FFF',
      color: darkTheme ? '#FFF' : '#000'
    };
  }, [darkTheme]);

  const styleOfLabel = useMemo(() => {
    return {
      color: darkTheme ? '#FFF' : '#000',
      fontSize: '28px'
    };
  }, [darkTheme]);

  const setMousePointer = () => {
    inputRef.current.focus();
  };

  return (
    <div style={styleOfBody} className="App">
      <label  style={styleOfLabel}>Counter: </label><br></br>
      <input ref={inputRef} type="number" value={counter} onChange={event => setCounter(parseInt(event.target.value))} /><br></br>
      <button onClick={() => setDarkTheme(prevDarkTheme => !prevDarkTheme)}>Change the Theme</button><br></br>
      <button onClick={() => setMessage(messages[Math.floor(Math.random() * messages.length)])}>Change the Message</button><br></br>
      <button onClick={setMousePointer}>Set Mouse Pointer</button><br></br>
      <h2 style={styleOfBox}>{tripleCount}</h2>
      <h3 style={styleOfBox}>Message is {message}</h3>
    </div>
  );
}

const tripleTheCount = (count) => {
  for (var i = 0; i < 1000000000000; i++) {
    return count * 119;
  }
}
