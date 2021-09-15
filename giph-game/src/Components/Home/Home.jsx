import React from 'react';
import Form from '../Form/Form';
import WinScreen from '../WinScreen/WinScreen';

const Home = ({gameOver}) => {
    return (
        <>
        {
            !gameOver 
            ?
            <Form />
            :
            <WinScreen/>  
        }
        </>
    )
}

export default Home;