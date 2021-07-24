import { useCallback, useEffect, useState } from "react";

import LogIn from "src/components/logIn";
import ChatRoom from "src/components/chatRoom";
import { socket, SocketContext } from "src/service/socket";

function App() {
  const [nickname, setNickname] = useState<string>("익명");

  useEffect(() => {
    return () => {
      console.log("socket server disconnected.");
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.emit("JOIN", { name: nickname });
  }, [nickname]);

  const handleSubmitNickname = useCallback((nickname: string) => {
    if (nickname === "") {
      setNickname("익명");
    } else {
      setNickname(nickname);
    }
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <LogIn handleSubmitNickname={handleSubmitNickname} />
        <ChatRoom nickname={nickname} />
      </div>
    </SocketContext.Provider>
  );
}

export default App;
