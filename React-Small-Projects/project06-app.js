import React from "react";
import "./App.css";
import ButtonBoss from './ButtonBoss';
import StateTester from './StateTester';

function App() {
  return (
    <div id='mainbox'>
      <h2>Event Handlers with Buttons</h2>
      <ButtonBoss />
      <StateTester />
    </div>
  );
};

export default App;
