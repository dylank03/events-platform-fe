import { useState, useEffect } from "react";
import { getLogout } from "./api/api";
import { Navigate } from "react-router-dom";

const Header = ({ setUser, user }) => {
  const [loggedOut, setLoggedOut] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    getLogout().then(() => {
      setLoggedOut(true);
      setUser(null);
    });
  };

  useEffect(() => {
    setLoggedOut(false);
  });

  return (
    <>
      {loggedOut && <Navigate to="/" replace={true} />}

      <ul className="header-container">
        <li className="header-logo">
          <a className="header-logo" href="/">
            CoffeeConnect
          </a>
        </li>
        {user ? (
          <li className="header-link" style={{ float: "right" }}>
            <a className="header-link" onClick={handleClick}>
              Log Out
            </a>
          </li>
        ) : (
          <>
            <li className="header-link" style={{ float: "right" }}>
              <a className="header-link" href="/register">
                Sign Up
              </a>
            </li>
            <li className="header-link" style={{ float: "right" }}>
              <a className="header-link" href="/login">
                Login
              </a>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default Header;
