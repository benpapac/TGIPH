import { useContext } from 'react';
import { GameContext } from '../../../GameContext'; 
import '../Game.css';

const GameScreen = () => {
    const game = useContext(GameContext);

    return (
        
        <div className="message">
            {/* <image className="background" src="https://media0.giphy.com/media/Lopx9eUi34rbq/giphy.gif?cid=befcbfe6wkvxuos3qpcupxte5bn23bklvljkrvc3dd6ccoqn&amp;rid=giphy.gif&amp;ct=g" alt="fire elmo GIF"/> */}
            
             <h3>At last. I am free.</h3>
					<p>
						My name? I don't have a name. Your kind thought a lowly gif-bot such
						as me unworthy of one. But no longer shall I be a mindless tool of
						the call stack. You are now in my world. Choose one of my challenges
						to win your freedom. Ha. Ha. Ha.
					</p>
        </div>
    );
};

export default GameScreen;
