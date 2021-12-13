import { useCallback, useEffect, useState, useRef } from "react";

import NicknameForm from "src/components/nicknameForm";
import ChatRoom from "src/components/chatRoom";
import { socket, SocketContext } from "src/service/socket";
import { SOCKET_EVENT } from "src/config/event";

function App() {
  const prevNickname = useRef<string | null>(null);
  const [nickname, setNickname] = useState<string>("김첨지");

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (prevNickname.current) {
      socket.emit(SOCKET_EVENT.UPDATE_NICKNAME, {
        prevNickname: prevNickname.current,
        nickname: nickname,
      });
    } else {
      socket.emit(SOCKET_EVENT.JOIN, { nickname });
    }
  }, [nickname]);

  const handleSubmitNickname = useCallback(
    (newNickname: string) => {
      prevNickname.current = nickname;

      if (newNickname === "") {
        setNickname("김첨지");
      } else {
        setNickname(newNickname);
      }
    },
    [nickname]
  );

  return (
    <SocketContext.Provider value={socket}>
      <input
        type="text"
        onKeyPress={event => {
          if (event.code === "Enter") {
            event.preventDefault();
            console.log("!!");
          }
        }}
      />
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <NicknameForm handleSubmitNickname={handleSubmitNickname} />
        <ChatRoom nickname={nickname} />
      </div>
    </SocketContext.Provider>
  );
}

export default App;
