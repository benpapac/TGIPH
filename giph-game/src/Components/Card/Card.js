import React from 'react';
import '../../App.css';

const Card = ({ card, key, id }) => {
	return (
		<div className='giph' id={id} key={key}>
			{
				!card ? (
					//does my Giph have a value? If no, say we're loading.
					<h3>Preparing your giph...</h3>
				) : (
					// <h3> we have data.</h3>
					<img src={card.images.downsized_large.url} />
				)
				//I want the gif image from myGiph
			}
		</div>
	);
};

export default Card;
