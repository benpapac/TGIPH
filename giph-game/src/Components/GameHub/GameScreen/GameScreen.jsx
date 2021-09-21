import { useState, useEffect, useContext } from 'react';
import {Route} from 'react-router-dom';
import { GameContext } from '../../../GameContext'; 
import Axios from 'axios';
import '../Game.css';
import MatchGame from '../MatchGame/MatchGame';
import CommonGame from '../CommonGame/CommonGame';
import GameMessage from '../GameMessage/GameMessage';
import Card from '../../Card/Card';

const GameScreen = () => {
    const game = useContext(GameContext);

    return (
        
        <>
            <image className="background" src="https://media0.giphy.com/media/Lopx9eUi34rbq/giphy.gif?cid=befcbfe6wkvxuos3qpcupxte5bn23bklvljkrvc3dd6ccoqn&amp;rid=giphy.gif&amp;ct=g" alt="fire elmo GIF"/>
                <GameMessage />
        </>
    );
};

export default GameScreen;
