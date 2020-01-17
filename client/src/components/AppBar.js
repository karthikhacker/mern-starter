import React from 'react';
import { Link } from 'react-router-dom';
class AppBar extends React.Component{
  render(){
    return(
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <Link className="navbar-brand" to="/">MERN STARTER</Link>
       <ul className="navbar-nav ml-auto">
        <li className="nav-item"><Link to="/signup" className="nav-link">Signup</Link></li>
        <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
       </ul>
     </nav>
    )
  }
}
export default AppBar;
