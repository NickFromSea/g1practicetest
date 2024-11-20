import {Link} from 'react-router-dom';
import React from "react";
import '../Navbar.css';

function Navbar(){
    return (

      <nav className="navbar">
       <ul className='ul-navbar'>
        <li className="li-navbar">
         <Link to="/">Home</Link>
        </li>
        <li className="li-navbar">
         <Link to="/test">Practice test</Link>
        </li>
        <li className="li-navbar">
         <Link to="/aboutUs">About us</Link>
        </li>
       </ul>
      </nav>
     
    );
}

export default Navbar;