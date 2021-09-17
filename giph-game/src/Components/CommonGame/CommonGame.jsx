import React from 'react';

const CommonGame = () => {
    return (
        <div>
            <h1>Hello from Common Game</h1>
        </div>
    );
};

export default CommonGame;



/*
function CommonGame() {
    props:
        pass in searchOptions
        
        state var:
        create a pairedNames array, that initializes with pairs of actors who have things in common.
        currentPair, setCurrentPair useState() to equal an array of a random pair from pairedNamesArray.
        correct, setCorrect useState() to equal false. // is the guess right?
        guessCount, setGuessCount useState() to equal 3. // how many guesses?

    function updatePairedNames() {
        setPairedNames to equal a filtered version of pairedNames:
            if the current item DOES NOT match currentPair, keep it.
    }

    useEffect({()=>{
        use Axios to get the url for the currentPair of actors.

    },[]);

    return (
        <>
            map across the currentPair. For each name, render the Giph component
                pass through:
                the name as props
                the updatePairedNames function as updateGiphs
                the searchOptions
        </>
    )
}
*/