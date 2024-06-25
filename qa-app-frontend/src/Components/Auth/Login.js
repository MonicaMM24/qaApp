import React, { useState } from "react";
import AuthService from "../../Services/AuthService";
import './Login.css';

const Login = ({ closePopup, onLoginSuccess }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await AuthService.login(formData.username, formData.password);
            onLoginSuccess(token);
            closePopup();
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="login-popup">
            <div className="login-popup-content">
                <h2 className="title">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="button" type="submit">Login</button>
                    {error && <p className="error">{error}</p>}
                </form>
                <a onClick={closePopup} className="close-button">X</a>
            </div>
        </div>
    );
};

export default Login;
