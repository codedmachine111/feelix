import "./HomePage.scss";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import { RoomForm } from "../../components/RoomForm/RoomForm";

export const HomePage = () => {
  const { authUser, setAuthUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify", {
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
      <div className="homepage-container">
        <h2>Welcome {authUser.username}!</h2>
          <RoomForm />
      </div>
    </>
  );
};
