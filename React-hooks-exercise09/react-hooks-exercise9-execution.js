import { ACTIONS } from './App';

export default function Execution({ execution, dispatch }) {

  return (
    <div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', margin: 'auto'}}>
          <button className='hide'></button>
          <button className='show' onClick={() => dispatch({ type: ACTIONS.TOGGLE_EXECUTION, stack: { id: execution.id }})}>Toggle</button>
          <span style={{width: '70vw', fontSize: '37px', fontWeight: 'bold', textAlign: 'center', color: execution.done ? 'navy' : 'crimson', fontFamily: execution.done ? 'Sofia' : 'Tangerine'}}>{execution.enteredText}</span>
          <button className='show' onClick={() => dispatch({ type: ACTIONS.DELETE_EXECUTION, stack: { id: execution.id }})}>Delete</button>
          <button className='hide'></button>
      </div>
    </div>
  );
}
