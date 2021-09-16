import React from 'react';
import {Link, Route} from 'react-router-dom';
import MatchGame from '../MatchGame/MatchGame';
import CommonGame from '../CommonGame/CommonGame';

const GameScreen = () => {
    return (
        <div>
            <Link to="/game/common"><h1>Common</h1></Link>
            <Link to="/game/match"><h1>Match</h1></Link>
            <Route exact path='/game/common' component={CommonGame} />
			<Route exact path='/game/match' component={MatchGame} />
        </div>
    );
};

export default GameScreen;