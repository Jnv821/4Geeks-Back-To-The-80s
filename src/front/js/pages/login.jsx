import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";

export const Login = () => {
    const { store, actions } = useContext(Context);
  
    return (
        
      <div className="text-center mt-5">
        <div className="account"><h4>My Account</h4></div>
           <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Login</label>
            </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                   <div className="sign">
                     <button type="button" class="btn">Login</button>
                   </div>
                   <div className="register">Si no tienes cuenta, créala aquí</div>
          </div>
        
      );
    };