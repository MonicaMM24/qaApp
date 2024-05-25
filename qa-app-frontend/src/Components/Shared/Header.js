import React from "react";

import {Link} from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/quiz">Quiz</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/car-mode">Car Mode</Link></li>
                    <li><Link to="/certifications">Certifications</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;