import React, { useReducer } from 'react';

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
        showText1: state.showText1,
        showText2: state.showText2
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
        showText2: state.showText2,
        showText1: state.showText1
      };
    case "TOGGLESHOWTEXT1":
      return {
        counter: state.counter,
        showText1: !state.showText1,
        showText2: state.showText2
      };
    case "TOGGLESHOWTEXT2":
      return {
        counter: state.counter,
        showText2: !state.showText2,
        showText1: state.showText1
      };
    default:
      return state;
  }
};

const HooksDisplay3 = () => {

  const [state, dispatch] = useReducer(reducerFunc, {counter: 0, showText1: true, showText2: true});

  return (
    <div className="hooks3">
      <h2>Hooks 3 Display</h2>
      <h3>{state.counter}</h3>
        <button onClick={() => {
         dispatch({ type: "INCREMENT" });
         dispatch({ type: "TOGGLESHOWTEXT1"});
       }}>Increment Counter</button>
       {state.showText1 && <p>Clicked 1</p>}
      <h3>{state.counter}</h3>
        <button onClick={() => {
         dispatch({ type: "DECREMENT" });
         dispatch({ type: "TOGGLESHOWTEXT2"});
       }}>Decrement Counter</button>
       {state.showText2 && <p>Clicked 2</p>}
      <h1>Toggle 1 Show Text Message</h1>
      {state.showText1 && <p>Incrementation Clicked 1</p>}
      <h1>Toggle 2 Show Text Message</h1>
      {state.showText2 && <p>Decrementation Clicked 2</p>}
    </div>
  );
}

export default HooksDisplay3;
