import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import GameMessage from '../GameHub/GameMessage/GameMessage';
import { GameContext } from '../../GameContext';
import Card from '../Card/Card';

const Home = () => {
    const game = useContext(GameContext);
    const [giphArray, setGiphArray] = useState([]);
    const url = `${game.searchOptions.base}q=hell&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=${game.searchOptions.winLimit}&offset=${game.searchOptions.offset}&rating=${game.searchOptions.rating}&lang=en`;


    // useEffect(()=>{
    //     Axios.get(url)
    //     .then(function (response){
    //         setGiphArray(response.data.data);
    //         console.log(response.data.data);
    //     })
    //     .catch(function (error){
    //         console.error(error);
    //     })

    // },[]);

    return (
        // <section >
        //     {giphArray.map(giph =>{
        //         return <Card card={giph} key={giph.id}/> 
        //     })}

            !game.submitted?
        ( <div className='home'>
                <h3>Thanks for Stopping by!</h3>
                <p>We've got a couple features up and running, and the profile feature is currently in beta testing. Head on over to the signup page to try it out!</p>
            </div>)
            :
            <GameMessage />
        // </section>
    )
}

export default Home;
