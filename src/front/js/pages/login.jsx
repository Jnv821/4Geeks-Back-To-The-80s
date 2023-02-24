import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    let requestOptions = {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      redirect: "follow",
    };

    fetch(
      "https://3001-jrdelrio-4geeksbacktoth-6ahzti1ytn9.ws-us87.gitpod.io/api/token",
      requestOptions
    )
      .then((response) => {
        if (response.status === 200) return response.json();
        else alert("There has been some error");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("There was an error", error));
  };

  return (
    <div className="container-login">
      <div className="row">
        <div className="form-login col-lg-12">
          <div className="account">
            <h4>My Account</h4>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
            <label htmlFor="floatingInput">Username</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="sign">
            <button type="button" className="btn-login" onClick={handleClick}>
              Login
            </button>
          </div>
          <div className="register">
            Si todavía no tienes cuenta, regístrate{" "}
            <Link to="/register">aquí </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
