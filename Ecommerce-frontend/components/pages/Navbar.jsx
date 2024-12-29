import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import Cart from "./Cart";


function Navbar() {
    // State to track if the dropdown menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu visibility when button is clicked
    const handleClick = () => {
        setIsMenuOpen(prevState => !prevState); // Toggle the state
    };

    return (
        <nav className="Navbar-main">
           

            <div className="logo-container">
                <img src="product-image/logo2.png" alt="Logo" className="navbar-logo" />
            </div>
            <div>
            <marquee>
                <h3>Make Some Order Boy's</h3>
            </marquee>
            </div>

            <div className="nav-container">
                <ul>

                    <li>
                        <NavLink
                            exact
                            to="/home"
                            activeClassName="active"
                            className="nav-links">Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/home"
                            activeClassName="active"
                            className="nav-links">Categories</NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/home"
                            activeClassName="active"
                            className="nav-links">Share</NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/home"
                            activeClassName="active"
                            className="nav-links">Account</NavLink>
                    </li>
                </ul>
            </div>
            <Cart />

            <div className="menuPannel">
                <button onClick={handleClick}>Menu</button>

                {isMenuOpen && (
                    <div className="dropdown-menu">
                        <div className="close"><button onClick={handleClick}>close</button></div>
                        <ul>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/categories">Categories</NavLink></li>
                            <li><NavLink to="/cart">Cart</NavLink></li>
                            <li><NavLink to="/Account">Account</NavLink></li>
                        </ul>
                        <div className="logout">
                            <button >logOut</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
