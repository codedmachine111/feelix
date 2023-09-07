import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { UserProvider } from "../src/contexts/UserContext/UserContext";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RoomPage } from "./pages/RoomPage/RoomPage";

const App = () => {

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
            <Route element={<RoomPage/>} path="/room/:roomId"></Route>
          </Routes>
        </GoogleOAuthProvider>
      </UserProvider>
    </div>
  );
};

export default App;
