import React, {useState} from "react";
import AuthService from "../Services/AuthService";

function LoginPage({ onLoginSuccess}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const token = await AuthService.login(username, password);
            onLoginSuccess(token);
        } catch (error) {
            setError(error.message);
        }
    };

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {error && <p>error</p>}
            </form>
        </div>
    );
}

export default LoginPage;