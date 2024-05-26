import React, { useState } from "react";
import './Register.css';

const Register = ({ closePopup, saveUser }) => {
    const [formData, setFormData] = useState({
        username: 'Moni',
        email: 'moni@email.com',
        password: 'moni'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveUser(formData);
        closePopup();
    };

    return (
        <div className="register-popup">
            <div className="register-popup-content">
                <h2 className="title">Register</h2>
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
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
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
                    <button className="button" type="submit">Register</button>
                </form>
                <a onClick={closePopup} className="close-button">X</a>
            </div>
        </div>
    );
};

export default Register;
