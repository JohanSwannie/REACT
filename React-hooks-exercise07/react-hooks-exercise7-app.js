import FunctionContext from './FunctionContext';
import { ConceptProvider } from './ConceptContext';

export default function App() {
  return (
    <div className="App">
      <ConceptProvider>
        <FunctionContext />
      </ConceptProvider>
    </div>
  );
}
