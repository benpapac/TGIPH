import '../../App.css';
import './Card.css';

const Card = ({ card, key, id }) => {
	return (
		<div className='giph' id={id} key={key}>
			{!card ? (
				<h3>Preparing your giph...</h3>
			) : (
				<>
					<a href={card.url} rel='noreferrer' target='_blank'>
						<img src={card.images.downsized_large.url} alt={card.title} />
					</a>
				</>
			)}
		</div>
	);
};

export default Card;
