import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { GameContext } from '../../GameContext';
import '../Card/Card.css';
import '../../App.css';

const Giph = ({ name, answer, id }) => {
	//grab game state using Context.
	const game = useContext(GameContext);

	//state vars
	//myGiph setMyGiph , so I can easily refer to the response from Axios.
	const [myGiph, setMyGiph] = useState();

	//use the useEffect hook to get the giph response through Axios

	useEffect(() => {
		const url = `${game.searchOptions.base}q=${name}&api_key=${game.searchOptions.key}&limit=${game.searchOptions.gameLimit}&offset=${game.searchOptions.offset}&rating=${game.searchOptions.rating}&lang=en`;

		//from giphy docs
		// 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5';

		Axios.get(url)
			.then(function (response) {
				setMyGiph(response.data.data[0]);
				console.log(response.data.data[0]);
			})
			//catch any errors
			.catch(function (response) {
				console.error(response);
			});

		return () => {
			return null;
		};
	}, [answer]);
	return (
		<div className='gameGiph' id={id} key={name}>
			{
				!myGiph ? (
					//does my Giph have a value? If no, say we're loading.
					<h3>Preparing your doom...</h3>
				) : (
					// <h3> we have data.</h3>
					<a href={myGiph.url} rel='noreferrer' target='_blank'>
						<img src={myGiph.images.downsized_medium.url} alt={myGiph.title} />
					</a>
				)
				//I want the gif image from myGiph
			}
		</div>
	);
};

export default Giph;
