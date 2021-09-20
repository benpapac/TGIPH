import { useState, useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';
import { GameContext } from '../../GameContext';
import Card from '../Card/Card';
import Axios from 'axios';
import {Screen} from '../StyledComponents/Screens';
import './GiphHeaven.css';
import '../Card/Card.css';

const GiphHeaven = () => {
	const game = useContext(GameContext);
	const [input, setInput] = useState('');
	const [search, setSearch] = useState('heaven');
	const [searchArray, setSearchArray] = useState();
	const url = `${game.searchOptions.base}q=${search}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12&offset=${game.searchOptions.offset}&rating=${game.searchOptions.rating}&lang=en`;

	useEffect(() => {
		getGiphs(search);
	}, []);

	function getGiphs(search) {
		Axios.get(url)
			.then(function (response) {
				setSearchArray(response.data.data);
				console.log(response.data.data);
			})
			.catch(function (response) {
				console.error(response);
			});
		return searchArray;
	}

	function handleChange(event) {
		setInput(event.target.value);
		setSearch(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getGiphs(search);
		setInput('');
	}

	return (
		<>
			<img className="background"
				src='https://media2.giphy.com/media/dUB5PG5k6xkjqCoutY/giphy.gif?cid=befcbfe64t5xyoip027jd6eb5gnfmd40iensyrsrqobrfh2d&rid=giphy.gif&ct=g'
				alt='flying soldiers with swords, dancers posing, and a baby floating above the clouds'
			/>
			<form className='form' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='find cool stuff'
					onChange={handleChange}
					value={input}
				/>
			</form>
			{!searchArray ? (
				<h1>Loading...</h1>
			) : (
				<div className='giphContainer'>
					{searchArray.map((giph) => {
						return (
							<>
							<Card card={giph} key={giph.id} id={searchArray.indexOf(giph)} />
							</>
						);
					})}
				</div>
			)}
		</>
	);
};

export default GiphHeaven;
