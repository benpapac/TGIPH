import React from 'react';
import {Link} from 'react-router-dom';

const Form = () => {
    return (
        <form id="signIn">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="username"/>
            <Link to="/game"><button type="submit">Submit</button></Link>
        </form>
    );
};

export default Form;