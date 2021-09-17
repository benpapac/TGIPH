import { useState, useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';
import Giph from '../Giph/Giph';
import { GameContext } from '../../GameContext';


// const MatchGame = ( ) => {
//     let array = ['jack nicholson', 'tom cruise', 'carrie mulligan'];
//     const [giphs, setGiphs] = useState([]);
//     const [id, setId] = useState('');
//     const searchOptions = {
// 		key: process.env.REACT_APP_GIPHY_KEY,
// 		limit: 1,
// 		rating: 'G',
// 		api: 'https://api.giphy.com/v1/gifs',
// 		endpoint: '/search',
// 		offset: 0,
// 	};


   const  MatchGame = () => {
         //grab our game state.
         const game = useContext(GameContext);
         
        //state vars:
            //giphs, setGiphs with the useState hook to equal an array
            const [giphs, setGiphs] = useState([]);
            //input, setInput with the useState hook to equal a string.
            const [input, setInput] = useState('');

    // useEffect(()=>{
    //     const url = `${game.searchOption}`
    //     Axios.get(url)
    // })

    /*
     OKAY, SO. This freaking axios dealio thingamabob. WAIT.
    */

        function updateGiphs(newGiph){
            //setGiphs to equal an array of its unpacked self, plus the newGiph.
            setGiphs([...giphs,newGiph]);
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
                //title equals this giph's title property.
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
      

        // {/* /* game.gameOver? <h1> You did it! Nooooooo!</h1>
        //    : <h1>You'll never escape!</h1>
        //   //for each name, render a Giph component, and pass through:
        //  //the name as props.
        //  //the function that updates this component's giphs. */}
        return (
            //*if game is over, say " How did you know that!"
            // if it isn't, say "You'll never escape!"
            <>
            {/* { map giphs array */}
            { game.namesArray.map(name => {
                return <Giph name={name} updateGiphs={updateGiphs} />
                ;})
            } 
            <form className="form" >
             <input type="text" id="matchGuess" placeholder="guess a name!" 
                onChange={handleChange} value={setInput}/>
            </form>
            
            </>
        );
        }
    // return (
    //     <div className='container'>
    //         {array.map(name => {
    //                 < GiphCard name={name} />
    //         })}
    //     </div>
    // );


export default MatchGame;