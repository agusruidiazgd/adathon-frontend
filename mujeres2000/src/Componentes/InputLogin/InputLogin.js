import React from 'react';
import './InputLogin.scss';

const InputLogin = ({type, text, setter}) => { 
    return(
        <div>
            <input type={type} 
                defaultValue= ''
                className="input-login" 
                placeholder={text} 
                onChange={e => setter(e.target.value)}>
            </input>
        </div>
    )
}

export default InputLogin;
