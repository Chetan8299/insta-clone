import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/form.scss";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  async function handleFormSubmit(e) {
    e.preventDefault();

    const user = await handleLogin(username, password);
    console.log(user);
    if(user) {
      navigate("/");
    }
  }

  if (loading) {
    return <h1>Loading...</h1>;
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
          <button className="button button-primary" type="submit">Login</button>
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
