import './App.css';
import './components/PlayerView';

import { useState, useEffect } from 'react';
import PlayerView from './components/PlayerView';

import { getRandomDNA } from './geneHelpers';

function App() {



  return (
    <div className="App">
      <div className='senseiContainer'>
      <PlayerView dna={getRandomDNA()} r1={getRandomDNA()} r2={getRandomDNA()} />
      <PlayerView reverse dna={getRandomDNA()} r1={getRandomDNA()} r2={getRandomDNA()} />
      </div>
    </div>
  );
}

export default App;
