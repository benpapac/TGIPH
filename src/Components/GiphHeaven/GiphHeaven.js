import { useState, useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';
import { GameContext } from '../../GameContext';
import Card from '../Card/Card';
import Axios from 'axios';
import { Screen } from '../StyledComponents/Screens';
import './GiphHeaven.css';
import '../Card/Card.css';

const GiphHeaven = () => {
	const game = useContext(GameContext);
	const [input, setInput] = useState('');
	const [search, setSearch] = useState('heaven');
	const [searchArray, setSearchArray] = useState();
	const url = `${game.searchOptions.base}q=${search}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=30&offset=${game.searchOptions.offset}&rating=${game.searchOptions.rating}&lang=en`;

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
			<form className='form' onSubmit={handleSubmit}>
				<label htmlFor="giphSearch">Use the search bar to grab new giphs. Scroll to see more, and click a gif to see it on Giphy!</label>
				<input
					type='text'
					id="giphSearch"
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
								<Card
									card={giph}
									key={giph.id}
									id={searchArray.indexOf(giph)}
								/>
							</>
						);
					})}
				</div>
			)}
		</>
	);
};

export default GiphHeaven;
