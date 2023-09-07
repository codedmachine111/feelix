import "./LoginForm.scss";
import { useCallback, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext/UserContext";
import {useNavigate} from 'react-router-dom'
import { Button } from "../Button/Button";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const { setAuthUser } = useContext(UserContext);

  const resetLoginForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleLoginForm = useCallback(
    (e) => {
      e.preventDefault();

      axios
        .post("http://localhost:3001/auth/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.message === "User logged in Successfully!") {
            resetLoginForm();
            setAuthUser({
              status: true,
              userId: res.data.userId,
              email: res.data.email,
              username: res.data.username,
            });
            localStorage.setItem("token", res.data.accessToken);
            navigate('/home')
          }else{
            alert(res.data.message)
          }
        });
    },
    [email, password]
  );

  return (
    <>
      <form id="login-form" onSubmit={handleLoginForm}>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          autoComplete="off"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="password"
          autoComplete="off"
        />

        <Button title={"Login"} type={"submit"} onSubmit={handleLoginForm}/>
      </form>
    </>
  );
};
