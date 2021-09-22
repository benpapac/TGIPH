import { useState, useContext, useEffect } from 'react';
import Giph from '../../Giph/Giph';
import { GameContext } from '../../../GameContext';
import '../Game.css';


   const  MatchGame = () => {
         const game = useContext(GameContext);
        const [input, setInput] = useState('');

        useEffect(()=>{
            game.setLevel(true);
        },[])

         function filterNames(event){
              let tempArray = game.namesArray.filter(person => {
                return !game.inputIsClose(event, person.name);
            });
            if(tempArray.length !== game.namesArray.length) game.setCorrect(true);
             game.setNamesArray(tempArray);
    }

        function handleChange(event){
            game.setCorrect(false);
            setInput(event.target.value);
            filterNames(event);
            checkWin();
        }

        function handleSubmit(event) {
            event.preventDefault();
            setInput('');
             checkWin();
        }

        function checkWin() {
            if(!game.namesArray.length) game.setGameOver(true);
        }

    return (
        <>
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

            <div className="gameContainer" >
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
