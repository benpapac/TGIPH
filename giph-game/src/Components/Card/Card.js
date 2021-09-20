import { useContext } from 'react';
import '../../App.css';
import './Card.css';
import {  GameContext } from '../../GameContext';

const Card = ({ card, key, id }) => {
	const game = useContext(GameContext);
	return (
		< div className={!game.submitted? 'giph' : 'backgroundGiph'} id={id} key={key}>
			{
				!card ? (
					//does my Giph have a value? If no, say we're loading.
					<h3>Preparing your giph...</h3>
				) : (
					// <h3> we have data.</h3>
					<>
							<img src={card.images.downsized_large.url} alt={card.title} />
							{!game.submitted? 
							<a href={card.url} rel='noreferrer' target='_blank'>
								Check it out on Giphy.
							</a> 
							:
							 null
							 }
					</>
				)
				//I want the gif image from myGiph
			}
		</div>
	);
};

export default Card;
