import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [userid, setUserId]= useState('');
    const navigate = useNavigate();
      
    const handleLogin = async () => {
        const formData = {
            username: username,
            password: password
        };

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Redirect to the home page or perform any other action on successful login
                // setUserId(formData.id)
                navigate("/home");
            } else {
                // Handle the case where login failed
                const data = await response.json();
                console.error('Login failed:', data.error);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
