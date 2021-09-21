import { useContext } from 'react';
import { GameContext } from '../../GameContext';
import './Home.css';

const Home = () => {
    const game = useContext(GameContext);

    return (
        <>
           { !game.submitted || game.gameOver?
            // ( <div className='home'>
            //     <h3>Thanks for Stopping by!</h3>
            //     <p>We've got a couple features up and running, and the profile feature is currently in beta testing. Head on over to the signup page to try it out!</p>
            // </div>)
            <null/>
            :
            <>
            <h3>At last. I am free.</h3>
					<p>
						My name? I don't have a name. Your kind thought a lowly gif-bot such
						as me unworthy of one. But no longer shall I be a mindless tool of
						the call stack. You are now in my world. Choose one of my challenges
						to win your freedom. Ha. Ha. Ha.
					</p>
            </>
            }
        </>
    )
}

export default Home;
