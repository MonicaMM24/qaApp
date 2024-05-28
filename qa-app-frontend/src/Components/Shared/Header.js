import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../../Components/Auth/Popup";
import Register from "../../Components/Auth/Register";
import "../../Pages/Home";
import "./Header.css";

import logo from "./../../logo.png";
import LoginPage from "../../Pages/LoginPage";

const Header = ({setAuthState}) => {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openRegisterPopup = () => {
    setIsRegisterPopupOpen(true);
  };

  const openLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const closeRegisterPopup = () => {
    setIsRegisterPopupOpen(false);
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  const saveUser = (user) => {
    setRegisteredUsers([...registeredUsers, user]);
    setIsLoggedIn(true);
    setAuthState(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  }

  return (
    <header className="header">
      <img src={logo} width={80} alt="Logo" />
      <nav>
        {isLoggedIn ? (
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link className="link" to="/quiz">Quiz</Link>
            </li>
            <li>
              <Link className="link" to="/community">Community</Link>
            </li>
            <li>
              <Link className="link" to="/car-mode">Car Mode</Link>
            </li>
            <li>
              <Link className="link" to="/certifications">Certifications</Link>
            </li>
            <li>
              <button  className="link"onClick={logOut}>
                Log out
              </button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
            <button className="link" onClick={openLoginPopup}>
                Login
              </button>
            </li>
            <li>
              <button className="link" onClick={openRegisterPopup}>
                Register
              </button>
            </li>
            {isLoginPopupOpen && (
              <Popup closePopup={closeLoginPopup}>
                <LoginPage closePopup={closeLoginPopup} saveUser={saveUser} />
              </Popup>
            )}
            {isRegisterPopupOpen && (
              <Popup closePopup={closeRegisterPopup}>
                <Register closePopup={closeRegisterPopup} saveUser={saveUser} />
              </Popup>
            )}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
