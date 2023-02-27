import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";


export const Register = () => {
    const { store, actions } = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmePassword] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const handleUsername = (ev) => {
        setUsername(ev.target.value);
    };

    const handlePassword = (ev) => {
        setPassword(ev.target.value);
    };

    const handleConfirmedPassword = (ev) => {
        setConfirmePassword(ev.target.value);
    };

    const handleEmail = (ev) => {
        setEmail(ev.target.value);
    };

    const handleDescription = (ev) => {
        setDescription(ev.target.value);
    };

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
            <div class="form-group">
               <label for="exampleFormControlTextarea1">Descriptions</label>
               <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Cuéntanos tu tipo de música favorita de los 80's, artistas, álbums ..."></textarea>
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