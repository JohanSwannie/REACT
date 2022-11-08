import React from "react";
import {ApplyConcept, ApplyConceptUpdate} from './ConceptContext';

export default function FunctionContext() {
  const functionConceptDark = ApplyConcept();
  const toggleConcept = ApplyConceptUpdate();
  const functionConceptStyles = {
    backgroundColor: functionConceptDark ? 'navy' : 'skyblue',
    color: functionConceptDark ? '#FFF' : '#000',
    width: '30%',
    marginRight: '30%',
    marginLeft: '30%',
    padding: '4rem',
    border: functionConceptDark ? '5% solid white' : '5% solid black',
    borderStyle: functionConceptDark ? 'dashed' : 'double',
    outlineStyle: 'double',
    margin: '2rem'
  };
  return (
    <div>
      <button onClick={toggleConcept}>Toggle Background Concept</button>
      <div style={functionConceptStyles}>Functional Component Background Concept</div>
    </div>
  )
}
