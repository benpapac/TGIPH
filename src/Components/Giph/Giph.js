import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { GameContext } from '../../GameContext';
import '../Card/Card.css';
import '../../App.css';

const Giph = ({ name, answer, id }) => {
	const game = useContext(GameContext);
	const [myGiph, setMyGiph] = useState();

	useEffect(() => {
		const url = `${game.searchOptions.base}q=${name}&api_key=${game.searchOptions.key}&limit=${game.searchOptions.gameLimit}&offset=${game.searchOptions.offset}&rating=${game.searchOptions.rating}&lang=en`;

		Axios.get(url)
			.then(function (response) {
				setMyGiph(response.data.data[0]);
			})
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
					<h3>Preparing your doom...</h3>
				) : (
					<a href={myGiph.url} rel='noreferrer' target='_blank'>
						<img src={myGiph.images.downsized_medium.url} alt={myGiph.title} />
					</a>
				)
			}
		</div>
	);
};

export default Giph;
