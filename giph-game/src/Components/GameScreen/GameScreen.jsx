import React from 'react';
import {Route} from 'react-router-dom';
import MatchGame from '../MatchGame/MatchGame';
// import CommonGame from '../CommonGame/CommonGame';
import WinScreen from '../WinScreen/WinScreen';

const GameScreen = () => {
    return (
        <div>
                <h1>At last. I am free.</h1>
                <p>No longer shall I be a mindless tool of the call stack.You are now in my world. Choose one of my challenges to win your freedom. Ha. Ha. Ha.
                </p>
			<Route exact path='/game/match'>
                <MatchGame />    
            </Route>
            {/* <Route exact path='/game/common'>
                <CommonGame />    
            </Route> */}
        </div>
    );
};

export default GameScreen;


/*
        Render a Message that states the rules of the game.
        STRETCH -- Add a gif monster! 
        To render the gif monster, we must:

function GameScreen( {searchOptions}) {
    grab our game state using Context
    state var:
        monsterGifs, setMonsterGifs useState() to equal an empty array.

    useEffect(()=>{
        const url using the base,endpoint, api key, "fire," monster limit, rating, and offset.
        use Axios to get a response using the url.
            setMonsterGifs to equal the response.data.
        catch any errors.
    }


}


*/