import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';


import './header.css';

export const Header = ({expended}) => {

const [isActive, setIsActive] = useState("false");
  expended(!isActive);
  return (
    <nav>
      <ul>
        <li className='logo'>Logo</li>
        <li className="btn"><span className={`fa fa-bars ${!isActive ? "show" : " "}`} onClick={ () => setIsActive(!isActive)} ></span></li>
        <div className={`items ${!isActive ? "show" : " "}`} onClick={ () => setIsActive(!isActive)}>
          <li><NavLink exact activeClassName="active" to='/'>Home</NavLink></li>
          <li><NavLink exact activeClassName="active" to='/about'>About</NavLink></li>
          <li><NavLink exact activeClassName="active" to='/services'>Services</NavLink></li>
          <li><NavLink exact activeClassName="active" to='/contact'>Contact</NavLink></li>
        </div>
        <li className="search-icon">
          <input type="search" placeholder="Search"/>
          <label className="icon">
           <span className='fa fa-search'></span>
          </label>
        </li>
      </ul>
    </nav>
  )
}
