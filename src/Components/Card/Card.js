import '../../App.css';
import './Card.css';

const Card = ({ card, key, id }) => {
	return (
		< div className='giph' id={id} key={key}>
			{
				!card ? (
					//does my Giph have a value? If no, say we're loading.
					<h3>Preparing your giph...</h3>
				) : (
					<>
							<a href={card.url} rel='noreferrer' target='_blank'>
								<img src={card.images.downsized_large.url} alt={card.title} />
							</a> 
					</>
				)
				//I want the gif image from myGiph
			}
		</div>
	);
};


export default Card;
