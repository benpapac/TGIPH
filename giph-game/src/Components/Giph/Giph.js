import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { GameContext } from '../../GameContext';

const Giph = ({ name, updateGiphs }) => {
	//grab game state using Context.
	const game = useContext(GameContext);

	//state vars
	//myGiph setMyGiph , so I can easily refer to the response from Axios.
	const [myGiph, setMyGiph] = useState();

	//use the useEffect hook to get the giph response through Axios
	useEffect(() => {
		console.log(game.searchOptions.gameLimit);
		// const url = `${game.searchOptions.base}${game.searchOptions.search}?api_key=${game.searchOptions.key}&q=${name}$limit=${2}&offset=${game.searchOptions.offset}&rating=${game.searchOptions.rating}&lang=en`;
		const url = `${game.searchOptions.base}${game.searchOptions.search}q=${name}&api_key=${game.searchOptions.key}&limit=${game.searchOptions.gameLimit}&offset=${game.searchOptions.offset}&rating=${game.searchOptions.rating}&lang=en`;

		// 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5';

		Axios.get(url)
			.then(function (response) {
				// Once I have the giph, setMyGiph to equal the object.
				setMyGiph(response.data);
				console.log('response data" ',response.data);
				//use the giphUpdate function to update my giphs array!
				updateGiphs(response.data);
			})
			//catch any errors
			.catch(function (response) {
				console.error(response);
			});
	}, []);

	return (
		<div className='giph'>
            {console.log(myGiph)}
			{
				!myGiph ? (
					//does my Giph have a value? If no, say we're loading.
					<h3>Preparing your doom...</h3>
				) : (
					// <h3> we have data.</h3>
                    <img src={myGiph.data[0].images.downsized_large.url} />
				)
				//I want the gif image from myGiph
			}
		</div>
		//STRETCH --  I might wrap my shtogh in a Link tag to detail
	);
};

export default Giph;

// const GiphCard = ( { id } ) => {
//     // const [url, setUrl] = useState('');
//     // const apiKey = env.process.
//     const [giph, setGiph] = useState({});

//     const searchOptions = {
// 		key: process.env.REACT_APP_GIPHY_KEY,
// 		limit: 1,
// 		rating: 'G',
// 		api: 'https://api.giphy.com/v1/gifs',
// 		endpoint: '/search',
// 		offset: 0,
// 	};

//     const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q${id}&limit=${searchOptions.limit}`;

//     useEffect(() => {
//       Axios.get(url)
//       .then(function(response){
//           setGiph(response.data);
//           console.log(response.data);
//       })
//       .catch(function (response){
//           console.error(response);
//       })
//     }, [])

//     return(
//         <h2>Hello from Giph Card</h2>
//     );
// }

// export default GiphCard;
