import React from 'react';
import { Link } from 'react-router-dom';
import '../Ligins.css';

export default function Ligings() {
  return (
    <div className="container">
      <h2>WELCOME TO THE 4TH WALL CHAKERS GAME</h2>
      <Link to="/login" className="link">
        Login
      </Link>
      <Link to="/signup" className="link">Signup</Link>
      <Link to="/logout" className="link">
        Logout
      </Link>
    </div>
  );
}
