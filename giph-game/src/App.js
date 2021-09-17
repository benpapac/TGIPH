import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import { GameContext } from './GameContext';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import GameScreen from './Components/GameScreen/GameScreen';
import WinScreen from './Components/WinScreen/WinScreen';

// HI! Currently, once game starts, if player refreshes browse, the app resets.
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
		'dwayne johnson',
		'carey mulligan',
		'leonardo di caprio',
	]);
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
				setNamesArray,
				searchOptions,
			}}>
			<div className='App'>
				<Nav />

				<main className='main'>
					<Route exact path='/'>
						{!submitted ? (
							<Home />
						) : gameOver ? (
							<Redirect to='/win' />
						) : (
							<Redirect to='/game' />
						)}
					</Route>

					<Route path='/form'>
						{!submitted ? (
							<Form />
						) : !gameOver ? (
							<Redirect to='/game' />
						) : (
							<Form />
						)}
					</Route>

					<Route path='/game'>
						{!gameOver ? (
							<GameScreen />
						) : 
							<Redirect to='/win' />
						}
					</Route>

					<Route path='/win' component={WinScreen} />
					<Route path='/*' render={() => <Redirect to='/' />} />
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
