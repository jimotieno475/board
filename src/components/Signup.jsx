import React, { useState } from "react";
import { useHistory } from "react-router";

function SignUp() {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history=useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((r) => {
        if (r.ok) {
          // return r.json().then((user) => setUser(user));
          history.push('/ligings');
        } else {
          throw new Error("Failed to register");
        }
      })
      .catch((error) => {
        console.error("Registration error:", error);
        setError("Failed to register. Please try again.");
      });
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            {error && <p className="text-danger">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
