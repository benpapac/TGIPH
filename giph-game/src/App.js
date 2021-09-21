import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import './Components/GameHub/Game.css';
import { GameContext } from './GameContext';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import GiphHeaven from './Components/GiphHeaven/GiphHeaven';
import Form from './Components/Form/Form';
import GameScreen from './Components/GameHub/GameScreen/GameScreen';
import WinScreen from './Components/GameHub/WinScreen/WinScreen';

// HI! Currently, once game starts, if player refreshes browser, the app resets.
//This is most likely because submitted resets during initial render. Maybe I can fix this. Not sure how yet.

//giphs Array might want to live here.
//completed level count might want to live here.
function App() {
	const [gameOver, setGameOver] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [username, setUsername] = useState('');
	const [namesArray, setNamesArray] = useState([
		'jack nicholson',
		'tom cruise',
		'lupita nyongo',
		'dwayne johnson',
		'carey mulligan',
		'viola davis',
		'eva longoria',
		'kal penn',
		'leonardo di caprio',
		'meryl streep',
		'antonio banderas',
		'will ferrell',
		'steve carell',
		'brad pitt',
		'will smith',
		'awkwafina',
	]);
	const searchOptions = {
		// which include:
		base: 'https://api.giphy.com/v1/gifs/search?',
		key: process.env.REACT_APP_GIPHY_KEY,
		gameLimit: 1,
		monsterLimit: 25,
		winLimit: 25,
		rating: 'pg',
		offset: 0,
		username: username,
	};
	return (
		<GameContext.Provider
			value={{
				gameOver,
				setGameOver,
				submitted,
				setSubmitted,
				username,
				setUsername,
				namesArray,
				setNamesArray,
				searchOptions,
			}}>
			<div className={!submitted || gameOver ? 'App' : 'Game'}>
				<Nav />
				<main className='main'>
						<Route exact path='/' component={GiphHeaven} />
					<Route exact path='/form'>
						{!submitted ? (
							<Form />
						) : !gameOver ? (
							<Redirect to='/game' />
						) : (
							<Form />
						)}
					</Route>

					<Route path='/game'>
						{!gameOver ? <GameScreen /> : <Redirect to='/win' />}
					</Route>
					<Route path='/win' component={WinScreen} />
					<Route path='/*' render={() => <Redirect to='/' />} />
				</main>
			</div>
		</GameContext.Provider>
	);
}

export default App;
