import React, { useState, useContext } from 'react';

  const ConceptContext = React.createContext();
  const ConceptUpdateContext = React.createContext();

  export function ApplyConcept() {
    return useContext(ConceptContext);
  }

  export function ApplyConceptUpdate() {
    return useContext(ConceptUpdateContext);
  }

  export function ConceptProvider({children}) {
    const [darkConcept, setDarkConcept] = useState(true);

    function toggleConcept() {
      setDarkConcept(prevDarkConcept => !prevDarkConcept);
    }

    return (
      <ConceptContext.Provider value={darkConcept}>
        <ConceptUpdateContext.Provider value={toggleConcept}>
          {children}
        </ConceptUpdateContext.Provider>
      </ConceptContext.Provider>
    )
  }
