import React, { useReducer } from 'react';
import './App.css';

const ACTIONS = {
  ADDONE: 'addone',
  SUBTRACTONE: 'subtractone',
  ADDFIVE: 'addfive',
  SUBTRACTFIVE: 'subtractfive'
}

function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.ADDONE:
      return {count: state.count + 1};
    case ACTIONS.SUBTRACTONE:
      return {count: state.count - 1 };
    case ACTIONS.ADDFIVE:
      return {count: state.count + 5 };
    case ACTIONS.SUBTRACTFIVE:
      return {count: state.count - 5 };
    default:
      return state.count;
  }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    function addOne() {
      dispatch({ type: ACTIONS.ADDONE });
    }

    function subtractOne() {
      dispatch({ type: ACTIONS.SUBTRACTONE });
    }

    function addFive() {
      dispatch({ type: ACTIONS.ADDFIVE });
    }

    function subtractFive() {
      dispatch({ type: ACTIONS.SUBTRACTFIVE });
    }
  return (
    <div className="App">
      <button onClick={addOne}>Add One</button>
      <button onClick={subtractOne}>Subtract One</button>
      <button onClick={addFive}>Add Five</button>
      <button onClick={subtractFive}>Subtract Five</button>
      <p style={{color: '#fff', fontSize: '40px', fontWeight: 'bold'}}> The Counter is now : {state.count} </p>
    </div>
  );
}
