import { ACTIONS } from './App';

export default function Executions({ execution, dispatch }) {

  function toggleHim() {
    dispatch({ type: ACTIONS.TOGGLE_EXECUTION, stack: { id: execution.id }});
  }

  function deleteHim() {
    dispatch({ type: ACTIONS.DELETE_EXECUTION, stack: { id: execution.id }});
  }

  const textInputStyle = {
    color: execution.done ? '#FFF' : 'crimson',
    background: '#000',
    fontSize: execution.done ? '25px' : '37px',
    fontFamily: execution.done ? 'Sofia' : 'Tangerine',
    fontWeight: 'bold',
    width: '70vw',
    textAlign: 'center',
    border: '2px solid #FFF'
  };

  return (
    <div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', margin: 'auto'}}>
          <button className='hide'></button>
          <button className='show' onClick={toggleHim}>Toggle</button>
          <p style={textInputStyle}>{execution.enteredText}</p>
          <button className='show' onClick={deleteHim}>Delete</button>
          <button className='hide'></button>
      </div>
    </div>
  )
}
