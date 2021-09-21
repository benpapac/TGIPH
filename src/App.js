import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import './Components/GameHub/Game.css';
import { GameContext } from './GameContext';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import GiphHeaven from './Components/GiphHeaven/GiphHeaven';
import Signup from './Components/Signup/Signup';
import GameScreen from './Components/GameHub/GameScreen/GameScreen';
import MatchGame from './Components/GameHub/MatchGame/MatchGame';
import CommonGame from './Components/GameHub/CommonGame/CommonGame';
import WinScreen from './Components/GameHub/WinScreen/WinScreen';

// HI! Currently, once game starts, if player refreshes browser, the app resets.
//This is most likely because submitted resets during initial render. Maybe I can fix this. Not sure how yet.

//giphs Array might want to live here.
//completed level count might want to live here.
function App() {
	const [gameOver, setGameOver] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [level, setLevel] = useState(false);
	const [correct, setCorrect] = useState(false);
	const [username, setUsername] = useState('');
	const [namesArray, setNamesArray] = useState([
		{name: 'jack nicholson', id: 'nicholson'},
		{name: 'tom cruise', id: 'cruise'},
		{name: 'lupita nyongo', id: 'nyongo'},
		{name: 'dwayne johnson', id: 'dwayne'},
		{name: 'carey mulligan',id: 'carey'},
		{name: 'viola davis', id: 'viola'},
		{name: 'eva longoria', id: 'eva'},
		{name: 'kal penn', id: 'kal'},
		{name: 'leonardo di caprio', id: 'leo'},
		{name: 'meryl streep', id: 'meryl'},
		{name: 'antonio banderas', id: 'antonio'},
		{name: 'will ferrell', id: 'ferrell'},
		{name: 'steve carell', id: 'steve'},
		{name: 'brad pitt', id: 'brad'},
		{name: 'will smith', id: 'smith'},
		{name: 'awkwafina', id: 'awkwa'},
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

	 function inputIsClose(event, answer) {
		 console.log(answer);
			//let mySnippet equal an empty string.
			let mySnippet = '';
			//let distance equal 0.
			let distance = 0;
			//if title has no characters, get out
			if (answer.length <= 0) return false;
			//if event's target value is less than 6, get out.
			if (event.target.value.length < 6) return false;
			//for each character in the title,
			mySnippet = answer.substring(0, event.target.value.length);
			//compare each character of mySnippet to the same character of value.
			for (let i = 0; i < mySnippet.length; i++) {
				// if they're not equal, add one to distance.
				if (mySnippet[i] !== event.target.value[i].toLowerCase()) distance++;
			}
			if (distance > 1) return false;
			return true;
		}
	return (
		<GameContext.Provider
			value={{
				gameOver,
				setGameOver,
				submitted,
				setSubmitted,
				username,
				setUsername,
				level,
				setLevel,
				correct,
				setCorrect,
				namesArray,
				setNamesArray,
				searchOptions,
				inputIsClose,
			}}>
				<div className={!submitted || gameOver ? 'App' : 'Game'}>
			<header>
				{!submitted || gameOver ? (
					<div className=''>
						{!submitted ? (<h1>Welcome to Giph Heaven!</h1>) 
							: (<h1>Welcome to Giph Heaven, {username} </h1>)}

						<h2>Powered by Giphy</h2>
					</div>
				) : (
					<div className='title'>
						<h1>Welcome to Giphy Hell, {username}</h1>
						<h3 id='subtitle'>Thank God I'm Post-Human. Ugh</h3>
					</div>
				)}
				<Nav />
			</header>
				<Home />
				<main className='main'>
					<Route exact path='/' component={GiphHeaven} />
					<Route exact path='/form'>
						{!submitted ? (
							<Signup />
						) : !gameOver ? (
							<Redirect to='/game' />
						) : (
							<Signup />
						)}
					</Route>

					{/* <Route exact path='/game'>
						<GameScreen />
					</Route> */}
					<Route exact path='/game/match'>
						{!gameOver ? <MatchGame /> : <Redirect to='/win' />}
					</Route>
					<Route exact path='/game/common'>
						{!gameOver ? <CommonGame /> : <Redirect to='/win' />}
					</Route>
					<Route path='/win' component={WinScreen} />
					<Route path='/*' render={() => <Redirect to='/' />} />
				</main>
			</div>
		</GameContext.Provider>
	);
}

export default App;
