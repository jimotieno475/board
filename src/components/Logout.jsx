import React from "react";
import { Link } from "react-router-dom";
import '../Logout.css'

function Logout({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header className="logout">
      <div>
        {/* <Link to="/" className="link">Home</Link> */}
      </div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
          <Link to="/" className="link">Home</Link>
            <Link to="/login" className="link">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Logout;