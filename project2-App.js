import React from "react";
import "./App.css";
import Header from "./Header";
import GoodFoods from "./GoodFoods";

function App() {
  return (
    <div id="mainbox" className="ui container">
      <Header />
      <GoodFoods />
    </div>
  );
};

export default App;
