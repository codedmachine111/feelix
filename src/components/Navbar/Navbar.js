import "./Navbar.scss";
import { Button } from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const Navbar = () => {
  const { setAuthUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignOut = async () => {
    setAuthUser({ status: false, userId: 0, email: "", username: "" });
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-logo">
          <h3 id="logo-text">Feelix</h3>
        </div>

        <div className="navbar-navlinks">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fa fa-bars"></i>
          </label>

          <ul className="navbar-navlinks-list">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <Button title="SIGNOUT" id="signout-btn" onClick={handleSignOut} />
          </ul>
        </div>
      </nav>
    </>
  );
};
