import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { UserProvider } from "../src/contexts/UserContext/UserContext";
import { useState } from "react";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  const [authUser, setAuthUser] = useState({
    status: false,
    userId: 0,
    email: "",
    username: "",
  });

  return (
    <div className="App">
      <UserProvider>
        <GoogleOAuthProvider
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        >
          <Routes>
            <Route element={<LandingPage />} path="/"></Route>
            <Route element={<HomePage />} path="/home"></Route>
            <Route element={<AuthPage />} path="/auth"></Route>
          </Routes>
        </GoogleOAuthProvider>
      </UserProvider>
    </div>
  );
};

export default App;
