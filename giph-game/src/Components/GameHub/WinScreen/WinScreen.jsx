import {useContext} from 'react';
import { GameContext } from '../../../GameContext';
import './WinScreen.css';

const WinScreen = () => {
    const game = useContext(GameContext);
    return (
        <>
        { game.gameOver?
        //If they did, give them a  Win Message. STRETCH -- FullSearchComponent 
            <h1> You did it! Thanks for saving the website!</h1>
            :
        // If they lost, give them a Lose Message. STRETCH -- JokeSearchComponent
            <h1> You'll never escape. </h1>}
        </>
    );
};
export default WinScreen;

/*

cont WinScreen = () => {
    results array, that starts out empty, and holds the player's search results.


    stretch -- return(
            input, which adds api keywords to the results array based on your search! fires on submit.
            map across the results array, and return a <Giph /> component for each one.
    )
    
    return (
        //did the player win?
        gameOver ?
       // If they did, give them a  Win Message. STRETCH -- FullSearchComponent
       <h1> You did it! Thanks for saving the website!</h1>
        //If they lost, give them a Lose Message. STRETCH -- JokeSearchComponent
        <h1> You'll never escape. </h1>
        Render a Link to the Home Page.
        )
}
*/