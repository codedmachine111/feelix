import { SignupForm } from "../../components/SignupForm/SignupForm";
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
            <SignupForm />
          </div>
          <div className="landingpage-options"></div>
        </div>
      </div>
    </>
  );
};
