import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import "./LandingPage.scss";

export const LandingPage = () => {
  return (
    <>
      <div className="landingpage-container">
        <div className="landingpage-content">
          <h2>Login to Your Account</h2>
          <p>
            Experience engaging video chats enhanced with real-time emotion
            prediction, bringing a new level of connection to your
            conversations.
          </p>
        </div>
        <div className="landingpage-form-container">
          <div className="landingpage-form-holder">
            <LoginForm />
          </div>
          /
          <div className="landingpage-options">
            login with google
          </div>
        </div>
        <div className="landingpage-toggle-auth">
          <p id="toggle-text"><Link to={'/auth'}>Don't have an account? Signup here.</Link></p>
        </div>
      </div>
    </>
  );
};
