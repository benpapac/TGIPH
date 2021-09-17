import {useContext} from 'react';
import {Link, Route} from 'react-router-dom';
import MatchGame from '../MatchGame/MatchGame';
// import CommonGame from '../CommonGame/CommonGame';
import WinScreen from '../WinScreen/WinScreen';
import {GameContext} from '../../GameContext';

const GameScreen = () => {
    const game = useContext(GameContext);
    return (
        <div>
            {/* <Route exact path='/game/common' component={CommonGame} /> */}
			<Route exact path='/game/match'>
                <MatchGame />    
            </Route>
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