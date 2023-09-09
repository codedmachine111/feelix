import "./HomePage.scss";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import { RoomJoinForm } from "../../components/RoomJoinForm/RoomJoinForm";
import { Navbar } from "../../components/Navbar/Navbar";

export const HomePage = () => {
  const { authUser, setAuthUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/auth/verify`, {
        headers: { accessToken: localStorage.getItem("token") },
      })
      .then((res) => {
        if (!res.data.error) {
          setAuthUser({
            status: true,
            userId: res.data.user.id,
            email: res.data.user.email,
            username: res.data.user.username,
          });
        } else {
          console.log(res.data.error);
          setAuthUser({
            status: false,
            userId: 0,
            email: "",
            username: "",
          });
        }
      });
  }, [setAuthUser]);

  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <h2>Welcome <span id="username">{authUser.username}!</span></h2>
        <div className="homepage-content">
          <RoomJoinForm />
        </div>
      </div>
    </>
  );
};
