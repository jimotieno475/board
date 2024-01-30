import React from 'react';
import { Link } from 'react-router-dom';
import '../Ligins.css';

export default function Ligings() {
  return (
    <div className="container">
      <Link to="/login" className="link">
        Login
      </Link>
      <Link to="/logout" className="link">
        Logout
      </Link>
    </div>
  );
}
