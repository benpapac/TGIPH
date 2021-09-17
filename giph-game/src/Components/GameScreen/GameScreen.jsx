import { useState } from 'react';
import {Route} from 'react-router-dom';
import MatchGame from '../MatchGame/MatchGame';
import CommonGame from '../CommonGame/CommonGame';
import GameMessage from '../GameMessage/GameMessage';

const GameScreen = () => {
    const [correct, setCorrect] = useState(false);
    const [level, setLevel] = useState(false);


    function inputIsClose(event, answer){
           //let mySnippet equal an empty string.
           let mySnippet = '';
           //let distance equal 0.
           let distance = 0;
            //if title has no characters, get out
            if (answer.length <= 0) return false;
            //if event's target value is less than 4, get out.
            if (event.target.value.length < 4) return false;
            //for each character in the title,
            mySnippet = answer.substring(0, event.target.value.length);
                //compare each character of mySnippet to the same character of value.
            for(let i = 0; i < mySnippet.length; i++) {
                // if they're not equal, add one to distance.
                if (mySnippet[i] !== event.target.value[i].toLowerCase()) distance++;
            }
            console.log('input: ', event.target.value,'snippet', mySnippet, 'answer: ',answer, 'distance: ',distance);
            if (distance > 2) return false;
            return true;
        }
    return (
        <div>
                <GameMessage level={level} correct={correct}/>
			<Route exact path='/game/match'>
                <MatchGame inputIsClose={inputIsClose} setLevel={setLevel} setCorrect={setCorrect}/>    
            </Route>
            <Route exact path='/game/common'>
                <CommonGame inputIsClose={inputIsClose} setLevel={setLevel} correct={correct} setCorrect={setCorrect}/>    
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