import { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../GameContext';
import Giph from '../Giph/Giph';

function CommonGame( {inputIsClose, setLevel, correct, setCorrect} ) {
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
    setLevel(true);
   if(compareNames.length) setCurrentPuzzle(compareNames[getRandomNumber(compareNames.length-1)]);
},[compareNames]);


    function filterCompareNames(event) {
       // setcompareNames to equal a filtered version of compareNames:
           // if the current item DOES NOT match currentPuzzle, keep it.
            let tempArray = compareNames.filter(object => {
                console.log(currentPuzzle.answer);
                return !inputIsClose(event, object.answer);
            })
            if(tempArray.length !== compareNames.length) setCorrect(true);
            setCompareNames(tempArray);
    };

    function handleChange(event){
        if(event.target.value.length >0 && event.target.value.length < 4) setCorrect(false);
        setInput(event.target.value);
        // console.log(currentPuzzle, 'input: ',event.target.value);
        //let's grab the event's target value and compare it to the currentPuzzle's answer.
        
       // If the input is within hamming distance of a substring, setCorrect to true!
        filterCompareNames(event)
        checkWin()
    };

   function handleSubmit(event){
        event.preventDefault();
        setInput('');
    };

   function checkWin(){
        if(correct){
            if (!compareNames.length) game.setGameOver(true);
        }
    };

    return (
        <> 
        <h3>Hello from Common</h3>
        <form className="form" onSubmit={handleSubmit}>
             <input type="text" id="compareGuess" placeholder="What do they have in common?" 
                onChange={handleChange} value={input}/>
            </form>
            {/* map across the currentPuzzle's names array. For each name, render the Giph component
                pass through:
                the name as props */}

                <div className="container">
                    { currentPuzzle.names.map(name => {
                       return <Giph name={name} answer={currentPuzzle.answer}/>
                    })}
                </div>
        </>
    )
}

export default CommonGame;