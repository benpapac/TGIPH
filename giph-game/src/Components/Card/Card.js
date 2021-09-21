import { useContext } from 'react';
import '../../App.css';
import './Card.css';
import {  GameContext } from '../../GameContext';

const Card = ({ card, key, id }) => {
	const game = useContext(GameContext);
	return (
		< div className='giph' id={id} key={key}>
			{
				!card ? (
					//does my Giph have a value? If no, say we're loading.
					<h3>Preparing your giph...</h3>
				) : (
					// <h3> we have data.</h3>
					<>
							{!game.submitted? 
							<a href={card.url} rel='noreferrer' target='_blank'>
								<img src={card.images.downsized_large.url} alt={card.title} />
								{/* Check it out on Giphy. */}
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
