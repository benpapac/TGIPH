import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import GiphCard from '../GiphCard/GiphCard';
import Axios from 'axios';


const MatchGame = ( ) => {
    let array = ['jack nicholson', 'tom cruise', 'carrie mulligan'];
    const [giphs, setGiphs] = useState([]);
    const [id, setId] = useState('');
    const searchOptions = {
		key: process.env.REACT_APP_GIPHY_KEY,
		limit: 1,
		rating: 'G',
		api: 'https://api.giphy.com/v1/gifs',
		endpoint: '/search',
		offset: 0,
	};

   

    // function getName(){
    //      }
    // getName();

    useEffect(() => {

        array.map(name => {
             const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${name}&limit=1&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;
             console.log(url);
            Axios.get(url)
                .then(function(response){
                    let newGiphs = [response];
                    setGiphs(...newGiphs);
                    console.log(`giphs: `,giphs);
                }) 
                .catch(function (response){
                    console.error(response);
                })
        });
    },[]);
    return (
        <div>
            {array.map(name => {
                <div className='giphCard'>
                    <Route path='/game/match/:{name}' render={()=> < GiphCard id={name} />}> <h3>get characters</h3> </Route>
                </div>

            })}
        </div>
    );
};

export default MatchGame;