import './App.css';
import './components/PlayerView';
import PlayerView from './components/PlayerView';


function App() {
  return (
    <div className="App">
      <div className='senseiContainer'>
      <PlayerView />
      <PlayerView />
      </div>
    </div>
  );
}

export default App;
