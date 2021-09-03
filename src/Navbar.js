import React from "react"; //nested to App.js component
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Ruby blog</h1>
            <div className="links">
                <Link to="/">Home Page</Link>
                <Link to="/create">Add new blog</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;
