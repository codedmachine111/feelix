import "./RoomForm.scss";
import { useEffect, useContext, useState } from "react";
import { Button } from "../Button/Button";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext/UserContext";
import "@livekit/components-styles";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";

export const RoomForm = () => {
  const [roomId, setRoomId] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const { authUser } = useContext(UserContext);

  useEffect(() => {
    const storedToken = localStorage.getItem("lk-accessToken");
    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);

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
        setAccessToken(res.data.token);
        localStorage.setItem("lk-accessToken", res.data.token);
      });
  };
  const handleDisconnect = ()=>{
    localStorage.removeItem("lk-accessToken");
    window.location.reload()
  }

  return (
    <>
      {!accessToken ? (
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
      ) : (
        <>
          <LiveKitRoom
            token={accessToken}
            audio={true}
            video={true}
            serverUrl={process.env.REACT_APP_LIVEKIT_SERVER_URL}
            connectOptions={{ autoSubscribe: false }}
            data-lk-theme="default"
            connect={true}
            style={{ height: "100vh" }}
            onDisconnected={handleDisconnect}
          >
            <VideoConference />
          </LiveKitRoom>
        </>
      )}
    </>
  );
};
