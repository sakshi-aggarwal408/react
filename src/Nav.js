import './App.css';
import React from 'react'
import {Link} from 'react-router-dom';
function Nav(){
  return (<>


<nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="#">Shopping</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Kidswear">Kids</a>
      </li>    
    <li className="nav-item">
        <a className="nav-link" href="#">Mens</a>
      </li>       
    <li className="nav-item">
        <a className="nav-link" href="#">Womens</a>
      </li>  
      
      <li className="nav-item">
        <a className="nav-link" href="#">Girls</a>
      </li>   
      <li className="nav-item">
        <a className="nav-link" href="#">Ethnic</a>
      </li>     
      

  <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Account
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="/Login">Login</a>
        <a className="dropdown-item" href="/Signup">SignUP</a>
        
      </div>
    </li>

   
    </ul>
  </div>  
</nav>




 </>)}

export default Nav;
