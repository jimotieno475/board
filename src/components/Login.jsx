import React, { useState} from 'react';
// import { APPCONTEXT } from './APPContext';
import { useNavigate } from 'react-router-dom';

const Login = ({setUserId}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const { setUserId } = useContext(APPCONTEXT);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();
      console.log(data)

      if (data.error) {
        return "";
      }
      console.log('User ID:',data.id);
      setUserId(data.id);
      console.log(data)
      navigate("/board")
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

