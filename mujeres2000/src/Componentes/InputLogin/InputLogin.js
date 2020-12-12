import React from 'react';
import './InputLogin.scss';

const InputLogin = ({text}) => { 
    return(

        <div>
        <input type="email" className="input-login" placeholder={text}></input>
        </div>

    )
}

export default InputLogin;
