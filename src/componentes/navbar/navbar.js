import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav>
          <ul id="menu">
              <li className="menu-item">
                  <Link to='/'>Home</Link>
              </li>
              <li className="menu-item">
                  <Link to='/characters'>Characters</Link>
              </li>
              <li className="menu-item">
                  <Link to='/episodes'>Episodes</Link>
              </li>
          </ul>
      </nav>
    );
  };
  
  export default Navbar;