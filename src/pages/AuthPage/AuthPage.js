import "./AuthPage.scss";
import { SignupForm } from "../../components/SignupForm/SignupForm";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useState } from "react";

export const AuthPage = () => {
  const [toggle, setToggle] = useState(false);

  const toggleAuth = ()=>{
    setToggle(!toggle);
  }

  return (
    <>
      <div className="authpage-container">
        <div className="authpage-content">
          {!toggle ? (
            <>
              <SignupForm toggleAuth={toggleAuth}/>
            </>
          ) : (
            <>
              <LoginForm />
            </>
          )}
        </div>
      </div>
    </>
  );
};
