import React, { useReducer } from 'react';

const ACTIONS = {
  ADDONE: 'addone',
  SUBTRACTONE: 'subtractone',
  ADDFIVE: 'addfive',
  SUBTRACTFIVE: 'subtractfive',
  RESETCOUNT: 'resetcount'
};

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
    case ACTIONS.RESETCOUNT:
      return {count: 0 };
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

    function resetCount() {
      dispatch({ type: ACTIONS.RESETCOUNT });
    }
  return (
    <div className="App">
      <button onClick={addOne}>Add 1</button>
      <button onClick={subtractOne}>Subtract 1</button><br></br>
      <button onClick={addFive}>Add 5</button>
      <button onClick={subtractFive}>Subtract 5</button><br></br>
      <button onClick={resetCount}>Reset</button>
      <p style={{color: '#fff', fontSize: '40px', fontWeight: 'bold'}}> The Counter is now : {state.count} </p>
    </div>
  );
}
