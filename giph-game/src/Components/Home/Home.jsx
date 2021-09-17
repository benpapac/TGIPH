import React from 'react';
import Form from '../Form/Form';
import { Route } from 'react-router-dom';
import WinScreen from '../WinScreen/WinScreen';

const Home = ({submitted, gameOver}) => {
    return (
        <div className='home'>
            <h3>Thanks for Stopping by!</h3>
            <p>We've got a couple features up and running, and the profile feature is currently in beta testing. Head on over to the signup page to try it out!</p>
        </div>
    )
}

export default Home;
