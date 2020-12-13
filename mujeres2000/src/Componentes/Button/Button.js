import React from 'react';
import './Button.scss';

const Button = ({text, tamaño, color, onClick}) => {
    return (
        <button 
            type="button" 
            className={`btn ${color} ${tamaño}`}
            onClick={onClick}
        >{text}</button>
    )
}

export default Button;
