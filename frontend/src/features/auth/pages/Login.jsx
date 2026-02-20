import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/form.scss";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      {
        username,
        password,
      },
      {
        withCredentials: true,
      },
    );

    console.log(response.data);
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Enter your username"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link className="toggleAuthForm" to="/register">
            Register
          </Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default Login;
