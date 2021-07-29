import React from 'react';
import { Link } from 'react-router-dom';
import './customLink.css';


const CustomLink = ({path, text}) => {
    return (
        <Link to={path} className="custom-link">{text}</Link>
    );
}

export default CustomLink;