import { useState, useContext, useEffect } from 'react';
import Giph from '../../Giph/Giph';
import { GameContext } from '../../../GameContext';
import '../Game.css';


   const  MatchGame = () => {
  
         //grab our game state.
         const game = useContext(GameContext);
         
        //state vars:
            //input, setInput with the useState hook to equal a string.
        const [input, setInput] = useState('');

        useEffect(()=>{
            game.setLevel(true);
        },[])

         function filterNames(event){
              let tempArray = game.namesArray.filter(person => {
                //If inputIsClose returns false, return the giph.
                return !game.inputIsClose(event, person.name);
            });
           // setGiphs to equal the new array.
            if(tempArray.length !== game.namesArray.length) game.setCorrect(true);
             game.setNamesArray(tempArray);
    }

        function handleChange(event){
            game.setCorrect(false);
            setInput(event.target.value);
            //let title equal an empty string.
            filterNames(event);
            checkWin() //to see if the player won or lost.
        }

        function handleSubmit(event) {
            event.preventDefault();
            setInput('');
             checkWin();
        }

        function checkWin() {
            //if giphs is empty, gameOver!
            if(!game.namesArray.length) game.setGameOver(true);
            //game.setSubmitted(false);
        }

    return (
        <>
        {/* { map giphs array */}
        <div className='message'>
            <h3>You'll never escape</h3>
            <p>
                I hope you enjoyed your computer, because it's mine now. I'll laugh at your futile attempts to name the actors on this page.
            </p>
            <form className="form" onSubmit={handleSubmit} id="matchForm">
                <input type="text" id="matchGuess" placeholder="no nicknames!" 
                onChange={handleChange} value={input}/>
            </form>
        </div>

        <div className="gameContainer">
            <div className="quadrant" id="one">
             { game.namesArray.map(person => {
                if(game.namesArray.indexOf(person) <= 3) {
                    return <Giph name={person.name} answer={person.name} id={person.id}/>
                    };
                
            })} 
        </div>
        <div className="quadrant" id="two">
            { game.namesArray.map(person => {
                if(game.namesArray.indexOf(person) <= 7 
                    && game.namesArray.indexOf(person) > 3) {
                       return <Giph name={person.name} answer={person.name} id={person.id}/>
                    };
            })} 
        </div>
        <div className="quadrant" id="three">
            { game.namesArray.map(person => {
                if(game.namesArray.indexOf(person) <= 11 
                    && game.namesArray.indexOf(person) > 7) {
                        return <Giph name={person.name} answer={person.name} id={person.id}/>
                    };
            })}
        </div>
        <div className="quadrant" id="four">
            { game.namesArray.map(person => {
                if(game.namesArray.indexOf(person) <= 15 
                    && game.namesArray.indexOf(person) > 11) {
                       return <Giph name={person.name} answer={person.name} id={person.id}/>
                    };
            })}
        </div>
        </div>
        </>
        );
    }

export default MatchGame;
