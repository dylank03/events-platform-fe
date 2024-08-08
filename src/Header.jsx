import { useState, useEffect } from "react";
import { getLogout } from "./api/api";
import { Navigate } from "react-router-dom";
import { getUser } from "./api/api";

const Header = ({ setUser, user }) => {
  useEffect(() => {
    getUser()
      .then(({ user }) => {
        setUser(user.firstName);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleClick = () => {
    setUser(null);
    getLogout();
  };

  console.log(user);

  return (
    <>
      <ul className="header-container">
        <li className="header-logo">
          <a className="header-logo" href={user ? "/home" : "/"}>
            CoffeeConnect
          </a>
        </li>
        {user ? (
          <li className="header-link" style={{ float: "right" }}>
            <a href="/" className="header-link" onClick={handleClick}>
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
