import './App.css';
import './components/PlayerView';

import PlayerView from './components/PlayerView';
import { getRandomDNA, newFOL } from './geneHelpers';

function App() {

  let [dna1, stats1] = getRandomDNA();
  let [dna2, stats2] = getRandomDNA();

  let p1 = { dna: dna1, r1: getRandomDNA(), r2: getRandomDNA(), stats: stats1 };
  let p2 = { dna: dna2, r1: getRandomDNA(), r2: getRandomDNA(), stats: stats2 };

  console.log(p1);
  let s = newFOL(p1.dna, p2.dna);
  console.log(s);


  return (
    <div className="App">
      <div className='senseiContainer'>
        <PlayerView dna={p1.dna} r1={getRandomDNA()} r2={getRandomDNA()} stats={p1.stats} />
        <PlayerView reverse dna={p2.dna} r1={getRandomDNA()} r2={getRandomDNA()} stats={p2.stats} />
      </div>
      <div className='senseiContainer'>
        <PlayerView dna={s} r1={getRandomDNA()} r2={getRandomDNA()} />
      </div>
    </div>
  );
}

export default App;
