import { useState, useContext } from 'react';
import Giph from '../Giph/Giph';
import { GameContext } from '../../GameContext';


   const  MatchGame = () => {
  
         //grab our game state.
         const game = useContext(GameContext);
         
        //state vars:
            //giphs, setGiphs with the useState hook to equal an array
            const [giphs, setGiphs] = useState([]);
            //input, setInput with the useState hook to equal a string.
            const [input, setInput] = useState('');

        function inputIsClose(event, name){
           //let mySnippet equal an empty string.
           let mySnippet = '';
           //let distance equal 0.
           let distance = 0;
            //if title has no characters, get out
            if (name.length <= 0) return false;
            //if event's target value is less than 4, get out.
            if (event.target.value.length < 4) return false;
            //for each character in the title,
                mySnippet = name.substring(0, event.target.value.length);
                //compare each character of mySnippet to the same character of value.
                    for(let i = 0; i < mySnippet.length; i++) {
                       // if they're not equal, add one to distance.
                        if (mySnippet[i] !== event.target.value[i].toLowerCase()) distance++;
                    }
                    console.log(distance);
            //if distance is more than 3, return false.
            if (distance > 2) return false;
            //Otherwise, return true.
            return true;
        }

        async function filterNames(event){
              let tempArray = game.namesArray.filter(name => {
                //If inputIsClose returns false, return the giph.
                return !inputIsClose(event, name);
            });
            console.log(tempArray)
           // setGiphs to equal the new array.
            await game.setNamesArray(tempArray);
        console.log(game);
    }

        function handleChange(event){
            setInput(event.target.value);
            console.log(event.target.value);
            //let title equal an empty string.
            // filterGiphs(event);
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
            { game.namesArray.map(name => {
                /* for each name, render a Giph component, and pass through:
                        the name as props.
                        the function that updates this component's giphs.
                */
                return <Giph name={name} giphs={giphs} setGiphs={setGiphs} />
                ;})
            } 
            <form className="form" onSubmit={handleSubmit}>
             <input type="text" id="matchGuess" placeholder="guess a name!" 
                onChange={handleChange} value={input}/>
            </form>
            
            </>
        );
        }

export default MatchGame;
