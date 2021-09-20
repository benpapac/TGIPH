import {useContext} from 'react';
import {GameContext} from '../../GameContext';
import './Form.css';

const Form = () => {
    //grab our game state using Context.
    const game = useContext(GameContext);


  function  handleChange(event) {
       //store the username in game state as they type!
        game.setUsername(event.target.value);
        console.log(game.username);
    }

  function  handleSubmit(event) {
      event.preventDefault();
      if(!game.username) return;
      //remember to prevent the default logic.
        //update the game state of submitted to true!
        game.setSubmitted(true);
        game.setGameOver(false);
        game.setNamesArray(['jack nicholson',
		'tom cruise',
		'dwayne johnson',
		'carey mulligan',
		'leonardo di caprio',
		'meryl streep',
		'will ferrell',
		'steve carell',
		'brad pitt',])
    }

    return (
            <div className="form">
            <h2>Please log in to get started.</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Type your name here!</label>
                <input type="text" id="'username'" onChange={handleChange} placerholder="'Ben'"/>
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}

export default Form;