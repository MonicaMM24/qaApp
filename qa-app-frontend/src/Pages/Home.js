import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Home.css';
import Register from "../Components/Auth/Register";
import Popup from "../Components/Auth/Popup";

const Home = () => {
    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
    const [registeredUsers, setRegisteredUsers] = useState([]);

    const openRegisterPopup = () => {
        setIsRegisterPopupOpen(true);
    };

    const closeRegisterPopup = () => {
        setIsRegisterPopupOpen(false);
    };

    const saveUser = (user) => {
        setRegisteredUsers([...registeredUsers, user]);
        // Save the user data to localStorage or a database here
    };

    return (
        <div className="home">
            <button onClick={openRegisterPopup} className="register-button">Register</button>

            {isRegisterPopupOpen && (
                <Popup closePopup={closeRegisterPopup}>
                    <Register closePopup={closeRegisterPopup} saveUser={saveUser} />
                </Popup>
            )}
            <h2>Home</h2>
            <p>Welcome to the Junior QA Application</p>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
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
};

export default Home;