import { useContext } from 'react';
import GameMessage from '../GameHub/GameMessage/GameMessage';
import GiphHeaven from '../GiphHeaven/GiphHeaven';
import { GameContext } from '../../GameContext';
import './Home.css';

const Home = () => {
    const game = useContext(GameContext);

    return (
        <>
           { !game.submitted?
            ( <div className='home'>
                <h3>Thanks for Stopping by!</h3>
                <p>We've got a couple features up and running, and the profile feature is currently in beta testing. Head on over to the signup page to try it out!</p>
            </div>)
            :
            <GameMessage />
            }
        </>
    )
}

export default Home;
