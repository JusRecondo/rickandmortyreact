import React from 'react';
import './button.css';


const Button = ({loadMore, text}) => {
    return (
        <button onClick={loadMore}>{text}</button>
    );
}

export default Button;