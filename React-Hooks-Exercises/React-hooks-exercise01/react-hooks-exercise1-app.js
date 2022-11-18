import React, { useState, useEffect } from "react";
import "./App.css";

function countInit() {
  return 50;
}

const App = () => {
  const [counter1, setCounter1] = useState (() => countInit());
  const array = useState(0);
  const counter2 = array[0];
  const setCounter2 = array[1];
  const [state1, setState1] = useState({counter3: 71});
  const [state2, setState2] = useState({color: "blue"});
  const counter3 = state1.counter3;
  const color = state2.color;
  const [state, setState] = useState({counter4: 100, color2: "blue"});
  const counter4 = state.counter4;
  const color2 = state.color2;
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  const colorWheel = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"];

  function increaseCounter1() {
    setCounter1(prevCounter1 => prevCounter1 + 5);
  }

  function increaseCounter2() {
    setCounter2(prevCounter2 => prevCounter2 + 1);
    setCounter2(prevCounter2 => prevCounter2 + 7);
  }

  function increaseCounter3() {
    setState1(prevState1 => { return { prevState1, counter3: prevState1.counter3 + 3};});
    setState2({color: colorWheel[Math.floor(Math.random() * colorWheel.length)]});
  }

  function increaseCounter4() {
    setState(prevState => { return {...prevState, counter4: prevState.counter4 + 100};});
    setState(prevState => { return {...prevState, color2: colorWheel[Math.floor(Math.random() * colorWheel.length)]};});
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(herewego => setItems(herewego));
  }, [resourceType]);

  return (
    <div className="App" style={{background: "lightyellow", height: "100vh"}}>
      <img src="https://skillsdynamix.com/wp-content/uploads/2020/06/reactjsh.jpg" style={{width: "350px", height: "150px", border: "5px solid crimson", borderStyle: "double"}} alt="ReactPic" />
      <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
        <p style={{background: "skyblue"}}>Counter1: {counter1}</p>
        <p style={{background: "olive"}}>Counter2: {counter2}</p>
        <p style={{background: color, color: "#FFF"}}>Counter3: {counter3} - Color: {color}</p>
        <p style={{background: color2, color: "#FFF"}}>Counter4: {counter4} - Color: {color2}</p>
      </div>
      <div>
        <button  onClick={increaseCounter1}>Add Counter 1</button><br></br>
        <button  onClick={increaseCounter2}>Add Counter 2</button><br></br>
        <button  onClick={increaseCounter3}>Add Counter 3</button><br></br>
        <button  onClick={increaseCounter4}>Add Counter 4</button><br></br>
        <button  onClick={() => setResourceType('posts')}>Posts</button><br></br>
        <button  onClick={() => setResourceType('users')}>Users</button><br></br>
        <button  onClick={() => setResourceType('comments')}>Comments</button>
      </div>
        <h5>{resourceType}</h5>
        {items.map(item => { return <pre key={item}>{JSON.stringify(item)}</pre> })}
        <p style={{fontSize: "18px"}}>Swanneman Learns React Hooks</p>
    </div>
  );
}

export default App;
