import React from 'react';
import './Button.scss';

const Button = ({text}) => {
    return (
        <button type="button" className="btn naranja violeta"> {text} </button>
    )
}

export default Button;
