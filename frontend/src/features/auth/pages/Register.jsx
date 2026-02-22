import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault()

    const response = await axios.post("http://localhost:3000/api/auth/register", {
      username,
      email,
      password
    }, {
      withCredentials: true
    })

    console.log(response);
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Enter email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            name="password"
            placeholder="Enter password"
          />
          <button className="button button-primary" type="submit">Register</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link className="toggleAuthForm" to="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
