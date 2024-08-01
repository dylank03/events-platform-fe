import { useState } from "react";
import { postLogin } from "./api/api";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState({});

  const handleClick = (event) => {
    event.preventDefault();
    postLogin(email, password)
      .then(({ user }) => {
        setUser(user);
      })
      .catch(({ response }) => {
        setError(response.data);
      });
  };

  return (
    <>
      {user && <Navigate to="/home" replace={true} />}
      <form>
        <div className="login-container">
          <h1>Login</h1>
          <p>Welcome back!</p>
          <p>
            Don't have an account yet? <a href="/register">sign up here!</a>
          </p>
          <hr></hr>

          <label className="form-label">Email</label>
          <input
            className="form-input"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="text"
            placeholder="JohnDoe@example.com"
          />
          <p className="error">{error.email}</p>

          <label className="form-label">Password</label>
          <input
            className="form-input"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="Enter Password"
          />
          <p className="error">{error.password}</p>

          <button className="form-button" type="submit" onClick={handleClick}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
