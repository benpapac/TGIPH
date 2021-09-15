import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import GameScreen from './Components/GameScreen/GameScreen';
import CommonGame from './Components/CommonGame/CommonGame';
import MatchGame from './Components/MatchGame/MatchGame';
import WinScreen from './Components/WinScreen/WinScreen';

function App() {
  const [gameOver, setGameOver] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main className="main">
        <h1>Hello from Main</h1>
        <Route path="/" render={()=> <Home gameOver={gameOver} />}/>
        <Route path='/game' component={GameScreen}/>
        <Route path="/game/common" component={CommonGame}/>
        <Route path="/game/match" component={MatchGame}/>
        <Route path="/win" component={WinScreen}/>
        {/* <Route path="/"></Route> */}
      </main>
    </div>
  );
}

export default App;
