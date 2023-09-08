import "./RoomJoinForm.scss";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const RoomJoinForm = () => {
  const [roomId, setRoomId] = useState("");
  const [roomName, setRoomName] = useState("");

  const { authUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleRoomJoinForm = async (e) => {
    e.preventDefault();

    await axios
      .get(`http://localhost:3001/room/get-token`, {
        params: {
          roomName: roomName,
          username: authUser.username,
        },
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        localStorage.setItem("lk-accessToken", res.data.token);
        setRoomId(res.data.roomId);
      });
  };

  useEffect(() => {
    if (roomId) {
      navigate(`/room/${roomId}`);
    }
  }, [roomId, navigate]);

  return (
    <>
      <form id="room-join-form" onSubmit={handleRoomJoinForm}>
        <h3>Join / Create a room</h3>
        <input
          type="text"
          name="roomName"
          placeholder="Enter Room Id"
          value={roomName}
          onChange={(e) => {
            setRoomName(e.target.value);
          }}
          id="roomName"
          autoComplete="off"
        />
        <Button title={"Create"} type={"submit"} />
      </form>
    </>
  );
};
