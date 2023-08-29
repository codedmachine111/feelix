import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<LandingPage />} path="/"></Route>
        <Route element={<HomePage />} path="/home"></Route>
      </Routes>
    </div>
  );
}

export default App;
