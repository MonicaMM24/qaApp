import React from "react";
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to the Junior QA Application</h1>
            <nav>
                <ul>
                    <li><Link to="/quiz">Take a Quiz</Link></li>
                    <li><Link to="/profile">Your Profile</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to="/support">Ask for Support</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/certification">Certifications</Link></li>
                    <li><Link to="/carmode">Car Mode</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;