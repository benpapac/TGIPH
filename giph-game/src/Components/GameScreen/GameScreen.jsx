import React from 'react';
import {Link} from 'react-router-dom';

const GameScreen = () => {
    return (
        <div>
            <Link to="/game/common"><h1>Common</h1></Link>
            <Link to="/game/match"><h1>Match</h1></Link>
        </div>
    );
};

export default GameScreen;