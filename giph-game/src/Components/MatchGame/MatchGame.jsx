import { useState, useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';
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

        function updateGiphs(response){
            //make a copy of giphs, and add the response.
            const newGiphs = [...giphs, response];
            //setGiphs to equal an array of its unpacked self, plus the newGiph.
            setGiphs(newGiphs);
        }

        function inputIsClose(event, title){
           //let mySnippet equal an empty string.
           let mySnippet = '';
           //let distance equal 0.
           let distance = 0;
            //if title has no characters, get out
            if (title.length <= 0) return;
            //if event's target value is less than 4, get out.
            if (event.target.value < 4) return;
            //for each character in the title,
            for(let i = 0; i < title.length; i ++){
                //start a substring called mySnippet from that character of equal
                //length to the event target's value.
                mySnippet = title.substring(i, (i+event.target.value.length));
                //compare each character of mySnippet to the same character of value.
                    for(let j = 0; j < mySnippet.length; j++) {
                       // if they're not equal, add one to distance.
                        mySnippet[j] !== event.target.value[j] && distance ++;
                    }
                //if distance is more than 3, return false.
                if (distance > 3) return false;
                //Otherwise, return true.
                else return true;
            }
        }

        function handleChange(event){
            //let title equal an empty string.
            let title = '';
            //let tempArray equal my giphs array.
            let tempArray = giphs;
            //Filter the giphs array, using this logic: For each giph,
            tempArray = giphs.filter(giph => {
                // console.log(`giphs: `,giphs);
                // title equals this giph's title property.
                title = giph.title;
                //If inputIsClose returns false, return the giph.
                if (!inputIsClose(event, title)) return giph;
                //Otherwise, return nothing.
                else return;
            });
            //setGiphs to equal the new array.
            setGiphs(tempArray);
            checkWin() //to see if the player won or lost.
        }
        //    MAY NOT NEED THIS: Document.querySelectorAll Giph components whose ids match title  property, and give them a display: none.


        function checkWin() {
            //if giphs is empty, gameOver!
            !giphs.length && game.setGameOver(true);
        }
      

        /* 
        if the game's over, <h1> You did it! Nooooooo!</h1>
        Otherwise<h1>You'll never escape!</h1>
        */

        return (
            //*if game is over, say " How did you know that!"
            // if it isn't, say "You'll never escape!"
            <>
            {/* { map giphs array */}
            { game.namesArray.map(name => {
                /* for each name, render a Giph component, and pass through:
                        the name as props.
                        the function that updates this component's giphs.
                */
                return <Giph name={name} giphs={giphs} setGiphs={setGiphs} updateGiphs={updateGiphs} />
                ;})
            } 
            <form className="form" >
             <input type="text" id="matchGuess" placeholder="guess a name!" 
                onChange={handleChange} value={setInput}/>
            </form>
            
            </>
        );
        }

export default MatchGame;