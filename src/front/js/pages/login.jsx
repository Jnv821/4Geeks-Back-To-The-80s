import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Footer } from "../component/footer";


export const Login = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    actions.login(username, password);
  };

  const navigate = useNavigate();

  if (store.token && store.token !== "" && store.token != undefined)
    navigate("/home");

  // para borrar el token en la consola del navegador
  // sessionStorage.removeItem("token")

  return (
    <div className="landing-page">
      <div className="back-to-the-80">
        <h1 className="name-back">
          BACK <br />
          TO THE 80'S
        </h1>
        <p className="description-landing">
          Sumérgete en la mejor música <br />
          de los años 80's
        </p>
      </div>
      <div className="container-login">
        <div className="form-login col-lg-12">
          <div className="account">
            <h4>My Account</h4>
          </div>
          {store.token && store.token !== "" && store.token !== undefined ? (
            "."
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
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleClick();
                    }
                  }}
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
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleClick();
                    }
                  }}
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
                <Link className="link-register" to="/register">
                  AQUÍ{" "}
                </Link>
              </div>
              <div className="login-footer">
              <Footer></Footer>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    
  );
};
