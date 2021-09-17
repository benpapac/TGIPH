import { useState, useContext, useEffect } from 'react';
import Giph from '../Giph/Giph';
import { GameContext } from '../../GameContext';


   const  MatchGame = ( {inputIsClose, setLevel, setCorrect} ) => {
  
         //grab our game state.
         const game = useContext(GameContext);
         
        //state vars:
            //input, setInput with the useState hook to equal a string.
        const [input, setInput] = useState('');


        useEffect(()=>{
            setLevel(true);
        },[])

         function filterNames(event){
              let tempArray = game.namesArray.filter(name => {
                //If inputIsClose returns false, return the giph.
                return !inputIsClose(event, name);
            });
           // setGiphs to equal the new array.
            if(tempArray.length !== game.namesArray.length) setCorrect(true);
             game.setNamesArray(tempArray);
    }

        function handleChange(event){
            setCorrect(false);
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
                <form className="form" onSubmit={handleSubmit}>
                 <input type="text" id="matchGuess" placeholder="guess a name!" 
                    onChange={handleChange} value={input}/>
                </form>
            { game.namesArray.map(name => {
                /* for each name, render a Giph component, and pass through:
                        the name as props.
                        the function that updates this component's giphs.
                */
                return <Giph name={name} answer={name}/>
                ;})
            } 
            
            </>
        );
        }

export default MatchGame;
