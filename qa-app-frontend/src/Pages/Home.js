import React from "react";
import {Link} from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the Junior QA Application</p>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/quiz">Take a Quiz</Link></li>
                    <li><Link to="/support">Ask for Support</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/certification">Certifications</Link></li>
                    <li><Link to="/car-mode">Car Mode</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;