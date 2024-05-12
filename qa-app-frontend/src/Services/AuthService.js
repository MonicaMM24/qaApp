const API_URL = 'http://localhost:8080/api';

async function login(username, password) {
    const response = await fetch('${API_URL}/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({username, password}),
    });
    if (response.ok) {
        const data = await response.json();
        return data.token; //Assuming the server responds with a token
    } else {
        throw new Error('Failed to login');
    }
}

export default {
    login,
};