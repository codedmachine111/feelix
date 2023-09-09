import "./SignupForm.scss";
import { useState, useCallback } from "react";
import axios from "axios";
import {Button} from '../Button/Button'
import { useNavigate } from "react-router-dom";

export const SignupForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const handleSignupForm = useCallback(
    (e) => {
      e.preventDefault();

      axios.post(`https://feelix.vercel.app/auth/signup`, {email: email, username: username, password: password}).then((res)=>{
        if(res.data.message === "User Created Successfully!"){
            resetForm();
            alert("User Created Successfully!")
            props.toggleAuth();
        }
      })
    },
    [email, password, username]
  );

  return (
    <>
      <form id="signup-form" onSubmit={handleSignupForm}>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          autoComplete="off"
          placeholder="First Name"
        />
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          autoComplete="off"
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          autoComplete="off"
          placeholder="Password"
        />

        <Button title={"Signup"} type={"submit"} onSubmit={handleSignupForm}/>
      </form>
    </>
  );
};
