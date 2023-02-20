import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { Link } from 'react-router-dom';

export const Login = () => {
    const { store, actions } = useContext(Context);
  
    return (
      <div className="container-login">
        <div className="row">
          <div className="form-login col-lg-12">
            <div className="account"><h4>My Account</h4></div>
                <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                   <div className="sign">
                     <button type="button" class="btn-login">Login</button>
                   </div>
                   <div className="register">Si todavía no tienes cuenta, regístrate <Link to="/register">aquí </Link></div>
          </div>
        </div> 
      </div>
      );
    };