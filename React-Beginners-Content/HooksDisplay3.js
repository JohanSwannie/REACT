import React, { useReducer } from 'react';

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
        showText: state.showText
      };
    case "TOGGLESHOWTEXT":
      return {
        counter: state.counter,
        showText: !state.showText
      };
    default:
      return state;
  }
};

const HooksDisplay3 = () => {

  const [state, dispatch] = useReducer(reducerFunc, {counter: 0, showText: true});

  return (
    <div className="hooks3">
    <h2>Hooks Display 3</h2>
    <h3>{state.counter}</h3>
      <button onClick={() => {
       dispatch({ type: "INCREMENT" });
       dispatch({ type: "TOGGLESHOWTEXT"});
     }}>CLICK ME</button>
     {state.showText && <p>Text is now Showing</p>}
    </div>
  );
}

export default HooksDisplay3;
