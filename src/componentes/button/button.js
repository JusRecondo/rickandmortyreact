import React from 'react';
import './button.css';


const Button = ({loadMoore, text}) => {
    return (
        <button onClick={loadMoore}>{text}</button>
    );
}

export default Button;