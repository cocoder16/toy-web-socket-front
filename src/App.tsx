import { useCallback, useEffect, useState, useRef } from "react";

import LogIn from "src/components/logIn";
import ChatRoom from "src/components/chatRoom";
import { socket, SocketContext } from "src/service/socket";
import { SOCKET_EVENT } from "src/config/event";

function App() {
  const prevNickname = useRef<string | null>(null);
  const [nickname, setNickname] = useState<string>("익명");
  const nicknameRef = useRef<string>("익명");

  useEffect(() => {
    return () => {
      socket.emit(SOCKET_EVENT.LEAVE, {
        name: nicknameRef, // state는 dependency에 반드시 넣어줘야하나 ref는 그렇지 않아서 ref 사용.
      });
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (prevNickname.current) {
      socket.emit(SOCKET_EVENT.UPDATE_NICKNAME, {
        prevName: prevNickname.current,
        name: nickname,
      });
    } else {
      socket.emit(SOCKET_EVENT.JOIN, { name: nickname });
    }
    nicknameRef.current = nickname;
  }, [nickname]);

  const handleSubmitNickname = useCallback(
    (newNickname: string) => {
      if (newNickname === "") {
        prevNickname.current = nickname;
        setNickname("익명");
      } else {
        prevNickname.current = nickname;
        setNickname(newNickname);
      }
    },
    [nickname]
  );

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
