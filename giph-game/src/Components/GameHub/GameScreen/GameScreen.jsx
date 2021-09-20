import { useState, useEffect, useContext } from 'react';
import {Route} from 'react-router-dom';
import { Game } from '../../StyledComponents/Screens'
import { GameContext } from '../../../GameContext'; 
import Axios from 'axios';
import '../Game.css';
import MatchGame from '../MatchGame/MatchGame';
import CommonGame from '../CommonGame/CommonGame';
import GameMessage from '../GameMessage/GameMessage';
import Card from '../../Card/Card';

const GameScreen = () => {
    const game = useContext(GameContext);
    const [correct, setCorrect] = useState(false);
    const [level, setLevel] = useState(false);
    const [background, setBackground] = useState([]);
    const url = `${game.searchOptions.base}q=hell&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=${1}&offset=${game.searchOptions.offset}&rating=${game.searchOptions.rating}&lang=en`;

    useEffect(()=> {
        Axios.get(url)
        .then(function (response) {
            setBackground(response.data.data);
        })
        .catch(function (error){
            console.error(error);
        })

    })


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
            if (distance > 2) return false;
            return true;
        }
    return (
        
        <Game>
                <GameMessage level={level} correct={correct}/>
			<Route exact path='/game/match'>
                <MatchGame inputIsClose={inputIsClose} setLevel={setLevel} setCorrect={setCorrect}/>    
            </Route>
            <Route exact path='/game/common'>
                <CommonGame inputIsClose={inputIsClose} setLevel={setLevel} correct={correct} setCorrect={setCorrect}/>    
            </Route>
            <div className="background" >
                {background.map(giph=>{
                  return  <Card card={giph} id={background.indexOf(giph)} key={giph.id}/>
                }
                )}
            </div>
        </Game>
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