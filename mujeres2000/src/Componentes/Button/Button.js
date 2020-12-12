import React from 'react';
import './Button.scss';

const Button = ({text, tamaño, color}) => {
    return (
        <button type="button" className={`btn ${color} ${tamaño}`}>{text}</button>
    )
}

export default Button;
