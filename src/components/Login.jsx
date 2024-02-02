import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useaxios from './useaxios';
import { APPCONTEXT } from './APPContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUserId } = useContext(APPCONTEXT);
  const navigate = useNavigate();
  const request = useaxios();

  const handleLogin = async () => {
    try {
      const res = await request({
        method: "POST",
        url: "login",
        headers: { "Content-Type": "application/json" },
        data: {
          username,
          password
        }
      });

      if (res === "error") {
        return "";
      }
      setUserId(res.id);
      navigate("/home");
    } catch (error) {
      console.error('Login error:', error);
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

                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
