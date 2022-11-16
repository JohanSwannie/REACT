import React, { useState, useReducer } from 'react';
import Execution from './Execution';
import './App.css';

export const ACTIONS = {
  ADD_EXECUTION: 'add_execution',
  TOGGLE_EXECUTION: 'toggle_execution',
  DELETE_EXECUTION: 'delete_execution'
};

function reducer(executions, action) {
  switch (action.type) {
    case ACTIONS.ADD_EXECUTION:
      return [...executions, newTodo(action.loading.name)];
    case ACTIONS.TOGGLE_EXECUTION:
      return executions.map(execution => {
        if (execution.id === action.loading.id) {
          return {...execution, done: !execution.done};
        }
        return execution;
      })
      case ACTIONS.DELETE_EXECUTION:
        return executions.filter(execution => execution.id !== action.loading.id);
    default:
      return executions;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, done: false };
}

export default function App() {
  const [executions, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD_EXECUTION, loading: {name: name} });
    setName('');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="Enter Name" onChange={event => setName(event.target.value)} />
      </form>
        {executions.map(execution => {
          return <Execution key={execution.id} execution={execution} dispatch={dispatch} />
      })}
    </div>
  );
}
