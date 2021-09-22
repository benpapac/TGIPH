import { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../../GameContext';
import Giph from '../../Giph/Giph';

function CommonGame( ) {
    //get game state using Context.
    const game = useContext(GameContext);
    const getRandomNumber = (n) => {
        return Math.floor(Math.random()*n);
    }

    const [compareNames, setCompareNames] = useState([
		{
			names: ['jack nicholson', 'tom cruise'],
			answer: 'a few good men',
		},
		{
			names: ['carey mulligan', 'sissy spacek'],
			answer: 'carrie',
		},
		{
			names: ['leonardo di caprio', 'tom hardy'],
			answer: 'revenant',
		},
		{
			names: ['dwayne johnson', 'emily blunt'],
			answer: 'jungle cruise',
		}]);
        
       // state var:
        //input, setInput, useState(), to update the user's input.
        const [input, setInput] = useState('');
        //currentPuzzle, setCurrentPuzzle useState(), to be used later.
        const [currentPuzzle, setCurrentPuzzle] = useState(compareNames[getRandomNumber(compareNames.length-1)]);
       // const [guessCount, setGuessCount] = useState(3) to equal 3. // how many guesses on this puzzle?
    useEffect(()=>{
        game.setLevel(true);
    if(compareNames.length) setCurrentPuzzle(compareNames[getRandomNumber(compareNames.length-1)]);
    },[compareNames]);


    function filterCompareNames(event) {
       // setcompareNames to equal a filtered version of compareNames:
           // if the current item DOES NOT match currentPuzzle, keep it.
            let tempArray = compareNames.filter(object => {
                return !game.inputIsClose(event, object.answer);
            })
            if(tempArray.length !== compareNames.length) {
                game.setCorrect(true);
                setCompareNames(tempArray);
            }
    };

    function handleChange(event){
        if(event.target.value.length >0 && event.target.value.length < 4) game.setCorrect(false);
        setInput(event.target.value);
        
        filterCompareNames(event)
        checkWin()
    };

   function handleSubmit(event){
        event.preventDefault();
        setInput('');
    };

   function checkWin(){
        if(game.correct){
            if (!compareNames.length) game.setGameOver(true);
        }
    };

    return (
        <> 
        <div className='message' id="commonMessage">
            <h3>You'll never escape</h3>
            <p>Your puny organic processor could never guess what film these two actors have in common.</p>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" id="compareGuess" placeholder="Guess. I dare you." 
                onChange={handleChange} value={input}/>
            </form>
        </div>
            {/* map across the currentPuzzle's names array. For each name, render the Giph component
                pass through:
                the name as props */}

                <div className="gameContainer">
                    { currentPuzzle.names.map(name => {
                       return <Giph name={name} answer={currentPuzzle.answer}/>
                    })}
                </div>
        </>
    )
}

export default CommonGame;