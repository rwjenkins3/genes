import './App.css';
import './components/PlayerView';

import PlayerView from './components/PlayerView';
import { getRandomDNA, getBase } from './geneHelpers';

function App() {


  let p1 = { dna: getRandomDNA(), r1: getRandomDNA(), r2: getRandomDNA() };
  let p2 = { dna: getRandomDNA(), r1: getRandomDNA(), r2: getRandomDNA() };
  console.log(p1);



  return (
    <div className="App">
      <div className='senseiContainer'>
        <PlayerView dna={p1.dna} r1={getRandomDNA()} r2={getRandomDNA()} />
        <PlayerView reverse dna={p2.dna} r1={getRandomDNA()} r2={getRandomDNA()} />
      </div>
    </div>
  );
}

export default App;
