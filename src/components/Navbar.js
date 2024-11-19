import {Link} from 'react-router-dom';
import React from "react";
import '../Navbar.css';

function Navbar(){
    return (
     <div className="container-navbar">
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
     </div>
    );
}

export default Navbar;