import { ACTIONS } from './App';

export default function Executions({ execution, dispatch }) {

  function toggleHim() {
    dispatch({ type: ACTIONS.TOGGLE_EXECUTION, stack: { id: execution.id }});
  }

  function deleteHim() {
    dispatch({ type: ACTIONS.DELETE_EXECUTION, stack: { id: execution.id }});
  }

  return (
    <div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', margin: 'auto'}}>
          <button className='hide'></button>
          <button className='show' onClick={toggleHim}>Toggle</button>
          <p style={{width: '70vw', fontSize: '37px', fontWeight: 'bold', textAlign: 'center', color: execution.done ? 'navy' : 'crimson', fontFamily: execution.done ? 'Sofia' : 'Tangerine'}}>{execution.enteredText}</p>
          <button className='show' onClick={deleteHim}>Delete</button>
          <button className='hide'></button>
      </div>
    </div>
  )
}
