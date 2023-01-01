import { useState, useEffect, useRef, useTransition, useMemo, useReducer } from 'react';
import DataArray from './DataArray';
import RestExecutions from './RestExecutions';

export const ACTIONS = {
  ADD_EXECUTION: 'ADD_EXECUTION',
  TOGGLE_EXECUTION: 'TOGGLE_EXECUTION',
  DELETE_EXECUTION: 'DELETE_EXECUTION',
  DELETE_ALL_EXECUTIONS: 'DELETE_ALL_EXECUTIONS'
};

function reduceThem(executions, action) {
  switch(action.type) {
    case ACTIONS.ADD_EXECUTION:
      return [...executions, newExecution(action.stack.enteredText)];
    case ACTIONS.TOGGLE_EXECUTION:
      return executions.map(execution => {
        if (execution.id === action.stack.id) {
          return {...execution, done: !execution.done};
        }
        return execution;
      });
    case ACTIONS.DELETE_EXECUTION:
      return executions.filter(execution => execution.id !== action.stack.id);
    case ACTIONS.DELETE_ALL_EXECUTIONS:
      return executions.filter(execution => execution.id === action.stack.id);
    default:
      return {...executions};
  }
}

function newExecution(enteredText) {
    return {id: Date.now(), enteredText: enteredText, done: false};
}

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [enteredText, setEnteredText] = useState('');
  const [dataArray, setDataArray] = useState([]);
  const [inputArray, setInputArray] = useState([]);
  const [showAmount, setShowAmount] = useState(0);
  const inputChangeAmount = useRef(0);
  const reffy = useRef();
  const [isPending, startTransition] = useTransition();
  const [executions, dispatch] = useReducer(reduceThem, []);

  const fontFamilyArray = ["'Tangerine', cursive", "'Sofia', cursive", "'Roboto', sans-serif", "'Lobster', cursive",
                           "'Shadows Into Light', cursive", "'Acme', sans-serif", "'Share Tech Mono', monospace",
                           "'Aladin', cursive", "'Sirin Stencil', cursive"];

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/JohanSwannie/6f6b9a63c7962fd39a18493d2f31b622/raw/827d2a30305308cbe356a09df16342c6e8d081a8/musicpieces.json')
    .then(response => response.json())
    .then(data => setDataArray(data));
  }, []);

  const calculatedAmount = useMemo(() => {
    return calculateDisplayAmount(showAmount);
  }, [showAmount]);

  function handleChange1(event) {
    event.preventDefault();
    setShowAmount(event.target.value);
    inputChangeAmount.current ++;
  }

  let chosenFontFamily = '';
  const inputLength = 20000;

  function handleChange2(event) {
    event.preventDefault();
    setInputValue(event.target.value);
    inputChangeAmount.current ++;
    chosenFontFamily = fontFamilyArray[Math.floor(Math.random() * fontFamilyArray.length)];
    reffy.current.style.fontFamily = chosenFontFamily;
    startTransition(() => {
      let inputList = [];
      for (var i = 0; i < inputLength; i++) {
        inputList.push(event.target.value);
      }
      setInputArray(inputList);
    });
  }

  function handleButtonClick() {
    setInputArray([]);
    setInputValue('');
    document.getElementById('inputBox').focus();
    inputChangeAmount.current ++;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (enteredText.length > 0) {
      dispatch({type: ACTIONS.ADD_EXECUTION, stack: {enteredText: enteredText}});
      setEnteredText('');
    }
    inputChangeAmount.current ++;
  }

  const reffyStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#FFF',
    letterSpacing: '.25rem',
    wordSpacing: '.85rem'
  };

  const arrangeStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '6vw',
    margin: '3vh 15vw'
  };

  const inputStyle = {
    width: '20vw',
    backgroundColor: 'skyblue',
    color: '#000',
    padding: '1rem'
  };

  const showAmountStyle = {
    width: '20vw',
    height: '3rem',
    backgroundColor: 'navy',
    color: '#FFF',
    fontWeight: 'bold',
    lineHeight: '3',
    border: '3px solid #FFF'
  };

  const buttonStyle = {
    backgroundColor: 'crimson',
    color: '#FFF',
    fontWeight: 'bold',
    border: '2px solid #FFF',
    padding: '1rem'
  };

  return (
    <div className="App">
      <p ref={reffy} style={reffyStyle}>The Application Has Been Rendered {inputChangeAmount.current} Times</p>
      <div style={arrangeStyle}>
        <input className="inputBox" type="number" placeholder="Enter Number Here" style={inputStyle} onChange={handleChange1} />
        <p style={{fontSize: '17px'}}> Calculated Result >>>>>>>> </p>
        <p style={showAmountStyle}>{calculatedAmount}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input id="textInput" type="text" value={enteredText} placeholder="Please Enter Your Text Here" onChange={(e) => setEnteredText(e.target.value)} />
      </form>
      <button className='show2' onClick={() => dispatch({ type: ACTIONS.DELETE_ALL_EXECUTIONS, stack:{id: ''}})}>Delete All Executions</button>
      {executions.map(execution => {
        return <RestExecutions key={execution.id} execution={execution} dispatch={dispatch} />
      })}
      <DataArray dataArray={dataArray} />
      <input className='inputBox' type="text" value={inputValue} placeholder="Enter Text Here" style={inputStyle} onChange={handleChange2} />
      <button style={buttonStyle} onClick={handleButtonClick}>Click to Delete Input Array</button>
      {isPending ? <span style={{color: '#FFF', fontWeight: 'bold'}}>  --- Input is loading - Please wait patiently ...</span> :
        inputArray.map((item, index) => {
        return <p key={index} style={{color: '#FFF'}}>{item}</p>
      })}
    </div>
  );
}

function calculateDisplayAmount(amount) {
  for (var i = 0; i < 50000; i++) {
    return parseFloat((amount * 38) / 1.5).toFixed(2);
  }
}
