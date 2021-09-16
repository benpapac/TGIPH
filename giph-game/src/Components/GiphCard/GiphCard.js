import { useState, useEffect } from 'react';
import Axios from 'axios';



const GiphCard = ( { id } ) => {
    // const [url, setUrl] = useState('');
    // const apiKey = env.process.
    const [giph, setGiph] = useState({});

    const searchOptions = {
		key: process.env.REACT_APP_GIPHY_KEY,
		limit: 1,
		rating: 'G',
		api: 'https://api.giphy.com/v1/gifs',
		endpoint: '/search',
		offset: 0,
	};


    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q${id}&limit=${searchOptions.limit}`;

    useEffect(() => {
      Axios.get(url)
      .then(function(response){
          setGiph(response.data);
          console.log(response.data);
      }) 
      .catch(function (response){
          console.error(response);
      })
    }, [])

    return(
        <h2>Hello from Giph Card</h2>
    );
}

export default GiphCard;