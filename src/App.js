import './App.css';
import WorldPopulationTable from './components/worldPopulation/wordPopulation';
import { tenHighestPopulation } from './worldPopulationData';
import HexColorsTable from './components/hexColors/HexColorsTable';
import NumberSorter from './components/numberSorter/numberSorter';


function App() {
  return (
    <div className="App container-fluid">
      
     {/* <WorldPopulationTable props={tenHighestPopulation} /> */}
     <HexColorsTable />
     {/* <NumberSorter /> */}
    </div>
  );
}

export default App;
