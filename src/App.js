import './App.css';
import PlayersListView from './PlayersListView';
import PlayerSelectedView from './PlayerSelectedView';
import {players} from './data/PlayersList';
import { useEffect, useState } from 'react';

function App() {
  // state for the current player selected
  const [playerSelected, setPlayerSelected] = useState(null);
  // state for the list of players
  const [playersData, setPlayersData] = useState([]);

  // runs on first load to set players data from imported array of players
  useEffect(() => {
    setPlayersData(players);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Football Players</h1>
      </header>
      
      <div style={{display: "grid", gridTemplateColumns: "50% 50%"}}>
        <div style={{height: "80vh", overflow: "scroll", margin: "20px"}}>
          <PlayersListView 
            data={playersData}
            setPlayer={setPlayerSelected}
          />
        </div>
        <div style={{height: "80vh", overflow: "scroll", margin: "20px"}}>
          <PlayerSelectedView 
            data={playersData}
            playerSelected={playerSelected}
            setPlayer={setPlayerSelected}
            setData={setPlayersData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
