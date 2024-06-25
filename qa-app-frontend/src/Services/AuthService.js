// Services/AuthService.js
const AuthService = {
    login: async (username, password) => {
        // Simulate an API call to authenticate the user
        if (username === 'Moni' && password === 'Password123!@#') {
            return 'fake-jwt-token';
        } else {
            throw new Error('Invalid username or password');
        }
    }
};

export default AuthService;
