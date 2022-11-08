import React from 'react';
import FunctionContext from './FunctionContext';
import { ConceptProvider } from './ConceptContext';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <ConceptProvider>
        <FunctionContext />
      </ConceptProvider>
    </div>
  );
}
