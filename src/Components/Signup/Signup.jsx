import {useContext} from 'react';
import {GameContext} from '../../GameContext';
import '../../App.css';

const Form = () => {
    const game = useContext(GameContext);


  function  handleChange(event) {
        game.setUsername(event.target.value);
    }

  function  handleSubmit(event) {
      event.preventDefault();
      if(!game.username) return;
        game.setSubmitted(true);
        game.setGameOver(false);
        game.setNamesArray(
            [{name: 'jack nicholson', id: 'nicholson'},
		{name: 'tom cruise', id: 'cruise'},
		{name: 'lupita nyongo', id: 'nyongo'},
		{name: 'dwayne johnson', id: 'dwayne'},
		{name: 'carey mulligan',id: 'carey'},
		{name: 'viola davis', id: 'viola'},
		{name: 'eva longoria', id: 'eva'},
		{name: 'kal penn', id: 'kal'},
		{name: 'leonardo di caprio', id: 'leo'},
		{name: 'meryl streep', id: 'meryl'},
		{name: 'antonio banderas', id: 'antonio'},
		{name: 'will ferrell', id: 'ferrell'},
		{name: 'steve carell', id: 'steve'},
		{name: 'brad pitt', id: 'brad'},
		{name: 'will smith', id: 'smith'},
		{name: 'awkwafina', id: 'awkwa'},])
    }

    return (
            <div className="signup">
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