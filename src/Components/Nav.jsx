import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (


        <div>
            <ul className="nav-ul flex bg-black" >
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/Update">Update Products</Link></li>
                <li><Link to="/Logout">Logout</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link to="/SignUp">SignUp</Link></li>
            </ul>
        </div>
    )


}
export default Nav;