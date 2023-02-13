import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";


export const Register = () => {
    const { store, actions } = useContext(Context);
  
    return (
    <div className="container-login">
      <form className="container-form">
            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label">Username</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Email address</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Password</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn-create">Create Account</button>
      </form>
    </div>
      );
    };