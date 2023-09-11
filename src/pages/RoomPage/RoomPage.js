import "./RoomPage.scss";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "@livekit/components-styles";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import { Navbar } from "../../components/Navbar/Navbar";

export const RoomPage = () => {
  const [accessToken, setAccessToken] = useState("");

  const navigate = useNavigate();

  const { roomId } = useParams();

  useEffect(() => {
    const storedToken = localStorage.getItem("lk-accessToken");
    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);

  const handleDisconnect = () => {
    // localStorage.removeItem("lk-accessToken");
    navigate("/home");
  };

  return (
    <>
    <Navbar />
      <div className="roompage-container">
        <h2>Room name: <span id="room-name">{roomId.split('-')[0]}</span></h2>
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
      </div>
    </>
  );
};
