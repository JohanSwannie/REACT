import { useState, useTransition } from 'react';

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [myInput, setMyInput] = useState('');
  const [array, setArray] = useState([]);

  const ARRAY_LENGTH = 15000;

  function handleChange(event) {
    event.preventDefault();
    setMyInput(event.target.value);
    startTransition(() => {
      const list = [];
      for (var i = 0; i < ARRAY_LENGTH; i++) {
        list.push(event.target.value);
      }
      setArray(list);
    });
  }
  return (
    <div className="App">
      <input type="text" value={myInput} autoFocus onChange={handleChange} />
      {isPending ? " Input Loading..."
       : array.map((element, idx) => {
         return <div key={idx} style={{fontSize: '62px', color: 'red', fontFamily: 'Tangerine'}}>{element}</div>
       })}
    </div>
  );
}
