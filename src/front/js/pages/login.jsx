import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("This is your token", store.token);

  const handleClick = () => {
    actions.login(username, password);
  };

  const navigate = useNavigate();

  if (store.token && store.token !== "" && store.token != undefined)
    navigate("/");

  // para borrar el token en la consola del navegador
  // sessionStorage.removeItem("token")

  return (
    <div className="container-login">
      <div className="row">
        <div className="form-login col-lg-12">
          <div className="account">
            <h4>My Account</h4>
          </div>
          {store.token && store.token !== "" && store.token !== undefined ? (
            "You are logged in with this token " + store.token
          ) : (
            <>
              <div className="form-floating mb-3">
                <input
                  type="text"
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
                <button
                  type="button"
                  className="btn-login"
                  onClick={handleClick}
                >
                  Login
                </button>
              </div>
              <div className="register">
                Si todavía no tienes cuenta, regístrate{" "}
                <Link to="/register">aquí </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
