import { useState } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import './App.css';
import { GameContext } from './GameContext';
import Home from './Components/Home/Home';
import GameScreen from './Components/GameScreen/GameScreen';

// HI! Currently, once game starts, if player refreshes browse, the app resets.
//This is most likely because submitted resets during initial render. Maybe I can fix this. Not sure how yet.


//giphs Array might want to live here.
//completed level count might want to live here.
function App() {
	const [gameOver, setGameOver] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [username, setUsername] = useState('');
	const namesArray = [
		'jack nicholson',
		'tom cruise',
		'dwayne johnson',
		'carey mulligan',
		'leonardo di caprio',
	];
	const searchOptions = {
		// which include:
		base: 'https://api.giphy.com/v1/gifs',
		search: '/search?',
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
				searchOptions,
			}}>
			<div className='App'>
				<header className='App-header'>
					{!submitted ? (
						<>
							<h1>Welcome to TGIPH!</h1>
							<h2>(Thank Giphy!)</h2>
						</>
					) : (
						<>
							<div className='title'>
								<h1>
									Welcome to Giphy Hell, {searchOptions.username}
								</h1>
									<h3 id='subtitle'>Thank God I'm Post-Human. Ugh</h3>
							</div>
							<Link to='/game/common'>
								<h1>Common</h1>
							</Link>
							<Link to='/game/match'>
								<h1>Match</h1>
							</Link>
						</>
					)}
				</header>

				<main className='main'>
					<Route exact path='/'>
						{!submitted ? (
							<Home submitted={submitted} gameOver={gameOver} />
						) : gameOver ? (
							<Redirect to='/win' />
						) : (
							<Redirect to='/game' />
						)}
					</Route>

					<Route path='/game' component={GameScreen} />
					<Route path='/*' render={() => <Redirect to='/' />} />
					{/* <Route path="/"></Route> */}
				</main>
			</div>
		</GameContext.Provider>
	);
}

export default App;

/*
function App(){
	props:
		searchOptions, which include:
					base URL
					the endpoint
					a reference to the API key
					a Game limit
					a Monster limit
					a Win limit
					a rating
					an offset
	state var:
		submitted, setSubmitted to know if the form was fired.
		gameOver, setGameOver to know if the game is over.
		username, setUsername to know what our player's name is!

		
		//I want to wrap my entire app in global state variables.

	return (
		<GameContext.Provider value={{gameOver,setGameOver,submitted,setSubmitted,searchOptions}}
			<header> STRETCH -- 
			A Header that includes a Nav, which takes you to the "Home," "Login," and "Gif Search"(Win Screen). 
			DURING THE GAME, each page MUST display the form, until it's submitted.
			Once Submitted is true, 
				A GameScreen Nav option must appear.
				all non-Game Navs must LOCK or Redirect the player back to the GameScreen.
			</header>
		

		<GameContext.Provider>
			<main>
			I want to start on the Home page, which renders the Form, BUT--
				If submitted is true, then...
					If the game is not over, I will Redirect to the GameScreen
					Otherwise,
					I will redirect to the Win Screen.
			
			</main>
		</GameContext.Provider>
		</>
	)

*/
