import "./SignupForm.scss";
import { useState, useCallback } from "react";
import axios from "axios";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const handleSignupForm = useCallback(
    (e) => {
      e.preventDefault();

      axios.post('http://localhost:3001/auth/signup', {email: email, username: username, password: password}).then((res)=>{
        if(res.data.message === "User Created Successfully!"){
            resetForm();
            alert("User Created Successfully!")
        }
      })
    },
    [email, password, username]
  );

  return (
    <>
      <form id="signup-form" onSubmit={handleSignupForm}>
        <label htmlFor="username">Name:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          autoComplete="off"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          autoComplete="off"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          autoComplete="off"
        />

        <button type="submit" onSubmit={handleSignupForm}>
          Signup
        </button>
      </form>
    </>
  );
};
