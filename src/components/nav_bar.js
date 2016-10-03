import React from 'react';
 import {Link} from 'react-router';
 export default function NavBar(props){
   return (
     <nav className='navbar navbar-inverse'>
       <div className='navbar-header'>
         <a className='navbar-brand' href={props.url}>{props.title}</a>
         { "||" }
         <Link to="/signin">Sign In</Link>
       </div>
     </nav>
   )
 }
