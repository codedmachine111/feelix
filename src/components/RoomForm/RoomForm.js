import "./RoomForm.scss";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { Button } from "../Button/Button";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const RoomForm = () => {

  const [roomId, setRoomId] = useState("");

  const { authUser } = useContext(UserContext);

  const navigate = useNavigate()

  const handleRoomForm = async (e) => {
    e.preventDefault();

    await axios
      .get(`http://localhost:3001/room/get-token`, {
        params: {
          roomId: roomId,
          name: authUser.username,
        },
      })
      .then((res) => {
        localStorage.setItem("lk-accessToken", res.data.token);
      });
    navigate(`/room/${roomId}`)
  };

  return (
    <>
      <form id="room-form" onSubmit={handleRoomForm}>
        <input
          type="text"
          name="roomId"
          placeholder="Enter Room Id"
          value={roomId}
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
          id="roomId"
          autoComplete="off"
        />
        <Button title={"Create"} type={"submit"} />
      </form>
    </>
  );
};
