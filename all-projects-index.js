import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

const JSX = (
  <div>
    <App />
    <h3>Time to do REACT.JS Training</h3>
    <p>Those who endure will benefit a lot</p>
   </div>
);

ReactDOM.render(JSX, document.getElementById("root"));

function Welcome(props) {
  return <h3>I am {props.name} {props.surname}, a {props.age} year old Software Developer</h3>;
}

const element = <Welcome name="Johan" surname="Swan" age="59"/>;

ReactDOM.render(
  element,
  document.getElementById('root2')
);
