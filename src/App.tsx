import { useEffect, useRef, useState } from "react";
import socketIo from "socket.io-client";

import LogIn from "src/components/logIn";
import ChatRoom from "src/components/chatRoom";

function App() {
  const [nickname, setNickname] = useState<string>("익명");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const nicknameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const ENDPOINT = process.env.REACT_APP_BACK_URL as string;
    const socket = socketIo(ENDPOINT, { withCredentials: true });

    socket.on("connect", () => {
      console.log("socket server connected.");
      socket.emit("join", { name: nickname });

      socket.on("receive", (newMessage: IMessage) => {
        setMessages(messages => [...messages, newMessage]);
      });
    });

    return () => {
      console.log("socket server disconnected.");
      socket.disconnect();
    };
  }, [nickname]);

  const handleChangeNickname = () => {
    const inputElement = nicknameInput.current;
    const nickname = inputElement ? inputElement.value : "";
    if (nickname === "") {
      setNickname("익명");
    } else {
      setNickname(nickname);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <LogIn
        onChangeNickname={handleChangeNickname}
        nicknameInput={nicknameInput}
      />
      <ChatRoom nickname={nickname} messages={messages} />
    </div>
  );
}

export default App;
