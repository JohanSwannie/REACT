import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {

  const [name, setName] = useState('');
  const renderAmount = useRef(0);
  const inputFocus = useRef();
  const h22 = useRef();
  const [jobDescription, setJobDescription] = useState('');
  const prevJobDescription = useRef('');

  useEffect(() => {
    renderAmount.current = renderAmount.current + 1;
    if (renderAmount.current % 2 === 0) {
      h22.current.style.color = "black";
    }
  });

  const putFocusOnInput = () => {
    inputFocus.current.focus();
    h22.current.style.color = "crimson";
  };

  useEffect(() => {
    prevJobDescription.current = jobDescription ;
  }, [jobDescription]);

  return (
      <div class='App'>
        <input ref={inputFocus} type="text" value={name} onChange={event => setName(event.target.value)} />
        <h2>My name is <span style={{fontSize: "40px"}}>{name}</span></h2>
        <h2 ref={h22}>Application has been rendered {renderAmount.current} times</h2>
        <button style={{padding: "1rem", color: "#FFF", background: "navy", border: "8px solid white", borderStyle: "double", marginBottom: '2rem'}} onClick={putFocusOnInput}>Focus on Input</button><br></br>
        <input type="text" value={jobDescription} onChange={event2 => setJobDescription(event2.target.value)} />
        <h2>My Current Job Description Is {jobDescription} And My Previous Job Description Was {prevJobDescription.current}</h2>
      </div>
  );
}
