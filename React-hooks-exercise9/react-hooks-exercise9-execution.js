import React from 'react';
import { ACTIONS } from './App';

export default function Execution({ execution, dispatch }) {

  return (
    <div>
      <span style={{fontSize: '21px', color: execution.done ? 'navy' : 'crimson'}}>{execution.name}</span>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridColumnGap: '4%', marginLeft: '28%'}}>
        <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_EXECUTION, loading: { id: execution.id }})}>Toggle</button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_EXECUTION, loading: { id: execution.id }})}>Delete</button>
      </div>
    </div>
  )
}
