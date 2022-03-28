import React from 'react';
import { useState } from 'react';

const StateTester = () => {
  const [person, setPerson] = useState('Man without name');
  const handleNameChange = () => {
    const names = ['Koos', 'Karel', 'Gert', 'Jannie', 'Richard', 'Pieter', 'Lodewyk'];
    const idx = Math.floor(Math.random() * 7);
    setPerson(names[idx]);
  }
  return (
    <div>
      <button id='butty1' onClick={handleNameChange}>Change Name</button>
      <p>{person}</p>
    </div>
  )
}

export default StateTester;
