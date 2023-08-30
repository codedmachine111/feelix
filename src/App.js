import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { UserProvider } from "../src/contexts/UserContext/UserContext";
import { useState } from "react";

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
        <Routes>
          <Route element={<LandingPage />} path="/"></Route>
          <Route element={<HomePage />} path="/home"></Route>
        </Routes>
      </UserProvider>
    </div>
  );
};

export default App;
