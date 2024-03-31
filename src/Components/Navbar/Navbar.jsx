import React from 'react'
import { Link } from 'react-router-dom';
import  './Navbar.css'


const Navbar = () => {
  return (
    <div>
      <nav className='Navbar-section'>
      <div className='logo-sect'>
      <a href='#' className='logo'>Con<span>Vene</span></a>
      </div>

      <div>
      <ul>
      <li> <a href='#'>Home </a> </li> 
      <li> <a href='#'>Meetups</a> </li> 
      <li> <a href='#'> Login </a> </li> 
      <li> <a href='#'> Signup </a> </li> 
     </ul>
      
      </div>
      
    </nav>

   
 




    </div>
  )
}

export default Navbar

// <li><Link to="/">Home</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/logout">Logout</Link></li>