// Navbar.js

import React from 'react';
import './Navbar.css'; // Import CSS for styling (create this file)

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
