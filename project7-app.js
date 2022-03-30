import React from "react";
import "./App.css";
import ListArray from './ListArray';
import ListArrayFooter from './ListArrayFooter';

function App() {
  return (
    <div id='mainbox'>
      <h2 id='h2' >Array Lists in a nutshell</h2>
      <ListArray />
      <ListArrayFooter />
    </div>
  );
};

export default App;
